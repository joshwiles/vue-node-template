<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">Member Dashboard</h1>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-500">Welcome, {{ authStore.user?.name }}</span>
            <button
              @click="handleLogout"
              class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Profile Section -->
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Profile Information</h3>
            
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-gray-700">Name</label>
                <input
                  v-model="profile.name"
                  type="text"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-chess-dark focus:border-chess-dark sm:text-sm"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  v-model="profile.email"
                  type="email"
                  disabled
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 sm:text-sm"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Chess Rating</label>
                <input
                  v-model="profile.rating"
                  type="number"
                  min="0"
                  max="3000"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-chess-dark focus:border-chess-dark sm:text-sm"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Member Since</label>
                <input
                  v-model="profile.memberSince"
                  type="text"
                  disabled
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 sm:text-sm"
                />
              </div>
            </div>
            
            <div class="mt-6">
              <button
                @click="updateProfile"
                :disabled="isUpdating"
                class="bg-chess-dark hover:bg-chess-light text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
              >
                {{ isUpdating ? 'Updating...' : 'Update Profile' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- My Events Section -->
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">My Events</h3>
            
            <div v-if="myEvents.length === 0" class="text-center py-8">
              <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 class="mt-2 text-sm font-medium text-gray-900">No events registered</h3>
              <p class="mt-1 text-sm text-gray-500">Get started by registering for an upcoming event.</p>
              <div class="mt-6">
                <router-link
                  to="/events"
                  class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-chess-dark hover:bg-chess-light"
                >
                  Browse Events
                </router-link>
              </div>
            </div>
            
            <div v-else class="space-y-4">
              <div
                v-for="event in myEvents"
                :key="event.id"
                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="text-lg font-medium text-gray-900">{{ event.title }}</h4>
                    <p class="text-sm text-gray-500">{{ event.date }} at {{ event.time }}</p>
                    <p class="text-sm text-gray-600 mt-1">{{ event.location }}</p>
                  </div>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="event.type === 'tournament' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'"
                  >
                    {{ event.type }}
                  </span>
                </div>
                <div class="mt-2 flex justify-between items-center">
                  <span class="text-sm text-gray-600">Fee: {{ event.fee }}</span>
                  <button
                    @click="unregisterFromEvent(event.id)"
                    class="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Unregister
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Available Events Section -->
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Available Events</h3>
            
            <div v-if="availableEvents.length === 0" class="text-center py-8">
              <p class="text-sm text-gray-500">No available events at the moment.</p>
            </div>
            
            <div v-else class="space-y-4">
              <div
                v-for="event in availableEvents"
                :key="event.id"
                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="text-lg font-medium text-gray-900">{{ event.title }}</h4>
                    <p class="text-sm text-gray-500">{{ event.date }} at {{ event.time }}</p>
                    <p class="text-sm text-gray-600 mt-1">{{ event.location }}</p>
                    <p class="text-sm text-gray-700 mt-2">{{ event.description }}</p>
                  </div>
                  <div class="flex flex-col items-end space-y-2">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      :class="event.type === 'tournament' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'"
                    >
                      {{ event.type }}
                    </span>
                    <span
                      v-if="event.isMemberOnly"
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                    >
                      Members Only
                    </span>
                  </div>
                </div>
                <div class="mt-4 flex justify-between items-center">
                  <span class="text-sm text-gray-600">Fee: {{ event.fee }} | {{ event.participants }}</span>
                  <button
                    @click="registerForEvent(event.id)"
                    class="bg-chess-dark hover:bg-chess-light text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const isUpdating = ref(false)
const events = ref([])
const myEvents = ref([])

const profile = reactive({
  name: '',
  email: '',
  rating: 0,
  memberSince: ''
})

// Computed properties
const availableEvents = computed(() => {
  return events.value.filter(event => !myEvents.value.find(myEvent => myEvent.id === event.id))
})

// Methods
const loadProfile = () => {
  if (authStore.user) {
    profile.name = authStore.user.name
    profile.email = authStore.user.email
    profile.rating = authStore.user.rating
    profile.memberSince = authStore.user.memberSince
  }
}

const updateProfile = async () => {
  isUpdating.value = true
  try {
    const result = await authStore.updateProfile({
      name: profile.name,
      rating: parseInt(profile.rating)
    })
    
    if (result.success) {
      alert('Profile updated successfully!')
    } else {
      alert('Failed to update profile: ' + result.message)
    }
  } catch (error) {
    alert('Error updating profile: ' + error.message)
  } finally {
    isUpdating.value = false
  }
}

const loadEvents = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/events')
    const data = await response.json()
    if (data.success) {
      events.value = data.data
    }
  } catch (error) {
    console.error('Error loading events:', error)
  }
}

const registerForEvent = async (eventId) => {
  try {
    const response = await authStore.apiCall(`http://localhost:3000/api/events/${eventId}/register`, {
      method: 'POST'
    })
    
    if (response.ok) {
      alert('Successfully registered for event!')
      loadEvents()
    } else {
      const data = await response.json()
      alert('Failed to register: ' + data.error)
    }
  } catch (error) {
    alert('Error registering for event: ' + error.message)
  }
}

const unregisterFromEvent = async (eventId) => {
  if (!confirm('Are you sure you want to unregister from this event?')) return
  
  try {
    const response = await authStore.apiCall(`http://localhost:3000/api/events/${eventId}/unregister`, {
      method: 'POST'
    })
    
    if (response.ok) {
      alert('Successfully unregistered from event!')
      loadEvents()
    } else {
      const data = await response.json()
      alert('Failed to unregister: ' + data.error)
    }
  } catch (error) {
    alert('Error unregistering from event: ' + error.message)
  }
}

const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}

// Lifecycle
onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push('/login')
    return
  }
  
  loadProfile()
  loadEvents()
})
</script> 