<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
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
      <!-- Stats Overview -->
      <div class="px-4 py-6 sm:px-0">
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Total Members</dt>
                    <dd class="text-lg font-medium text-gray-900">{{ stats.totalMembers }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Active Events</dt>
                    <dd class="text-lg font-medium text-gray-900">{{ stats.activeEvents }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Total Registrations</dt>
                    <dd class="text-lg font-medium text-gray-900">{{ stats.totalRegistrations }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">New Messages</dt>
                    <dd class="text-lg font-medium text-gray-900">{{ stats.newMessages }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <button
                @click="showCreateEventModal = true"
                class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chess-dark"
              >
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span class="mt-2 block text-sm font-medium text-gray-900">Create Event</span>
              </button>

              <button
                @click="showUserManagement = true"
                class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chess-dark"
              >
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <span class="mt-2 block text-sm font-medium text-gray-900">Manage Users</span>
              </button>

              <button
                @click="showContentEditor = true"
                class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chess-dark"
              >
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span class="mt-2 block text-sm font-medium text-gray-900">Edit Content</span>
              </button>

              <button
                @click="showAnalytics = true"
                class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chess-dark"
              >
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span class="mt-2 block text-sm font-medium text-gray-900">Analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div class="flow-root">
              <ul class="-mb-8">
                <li v-for="activity in recentActivity" :key="activity.id">
                  <div class="relative pb-8">
                    <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                    <div class="relative flex space-x-3">
                      <div>
                        <span class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white" :class="activity.iconClass">
                          <component :is="activity.icon" class="h-5 w-5 text-white" />
                        </span>
                      </div>
                      <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p class="text-sm text-gray-500">{{ activity.description }}</p>
                        </div>
                        <div class="text-right text-sm whitespace-nowrap text-gray-500">
                          <time :datetime="activity.datetime">{{ activity.time }}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Event Modal -->
    <div v-if="showCreateEventModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Create New Event</h3>
          <form @submit.prevent="createEvent">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Title</label>
                <input
                  v-model="newEvent.title"
                  type="text"
                  required
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-chess-dark focus:border-chess-dark sm:text-sm"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Type</label>
                <select
                  v-model="newEvent.type"
                  required
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-chess-dark focus:border-chess-dark sm:text-sm"
                >
                  <option value="tournament">Tournament</option>
                  <option value="workshop">Workshop</option>
                  <option value="social">Social</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Date</label>
                <input
                  v-model="newEvent.date"
                  type="date"
                  required
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-chess-dark focus:border-chess-dark sm:text-sm"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Time</label>
                <input
                  v-model="newEvent.time"
                  type="text"
                  placeholder="2:00 PM - 6:00 PM"
                  required
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-chess-dark focus:border-chess-dark sm:text-sm"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Location</label>
                <input
                  v-model="newEvent.location"
                  type="text"
                  required
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-chess-dark focus:border-chess-dark sm:text-sm"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Fee</label>
                <input
                  v-model="newEvent.fee"
                  type="text"
                  placeholder="$15"
                  required
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-chess-dark focus:border-chess-dark sm:text-sm"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  v-model="newEvent.description"
                  rows="3"
                  required
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-chess-dark focus:border-chess-dark sm:text-sm"
                ></textarea>
              </div>
              
              <div class="flex items-center">
                <input
                  v-model="newEvent.isMemberOnly"
                  type="checkbox"
                  class="h-4 w-4 text-chess-dark focus:ring-chess-dark border-gray-300 rounded"
                />
                <label class="ml-2 block text-sm text-gray-900">Members Only</label>
              </div>
            </div>
            
            <div class="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                @click="showCreateEventModal = false"
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="bg-chess-dark hover:bg-chess-light text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// State
const showCreateEventModal = ref(false)
const showUserManagement = ref(false)
const showContentEditor = ref(false)
const showAnalytics = ref(false)

const stats = reactive({
  totalMembers: 0,
  activeEvents: 0,
  totalRegistrations: 0,
  newMessages: 0
})

const newEvent = reactive({
  title: '',
  type: 'tournament',
  date: '',
  time: '',
  location: '',
  fee: '',
  description: '',
  isMemberOnly: false
})

const recentActivity = ref([
  {
    id: 1,
    description: 'New member Sarah Chen registered',
    time: '2 hours ago',
    datetime: '2024-03-01T10:00:00Z',
    icon: 'UserIcon',
    iconClass: 'bg-green-500'
  },
  {
    id: 2,
    description: 'Blitz Tournament created',
    time: '4 hours ago',
    datetime: '2024-03-01T08:00:00Z',
    icon: 'CalendarIcon',
    iconClass: 'bg-blue-500'
  },
  {
    id: 3,
    description: 'Strategy Workshop registration closed',
    time: '1 day ago',
    datetime: '2024-02-29T10:00:00Z',
    icon: 'CheckIcon',
    iconClass: 'bg-purple-500'
  }
])

// Methods
const loadStats = async () => {
  try {
    const response = await authStore.apiCall('http://localhost:3000/api/auth/users')
    if (response.ok) {
      const data = await response.json()
      stats.totalMembers = data.data.length
    }
  } catch (error) {
    console.error('Error loading stats:', error)
  }
}

const createEvent = async () => {
  try {
    const response = await authStore.apiCall('http://localhost:3000/api/events', {
      method: 'POST',
      body: JSON.stringify(newEvent)
    })
    
    if (response.ok) {
      alert('Event created successfully!')
      showCreateEventModal.value = false
      // Reset form
      Object.keys(newEvent).forEach(key => {
        if (key === 'type') {
          newEvent[key] = 'tournament'
        } else if (key === 'isMemberOnly') {
          newEvent[key] = false
        } else {
          newEvent[key] = ''
        }
      })
    } else {
      const data = await response.json()
      alert('Failed to create event: ' + data.error)
    }
  } catch (error) {
    alert('Error creating event: ' + error.message)
  }
}

const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}

// Lifecycle
onMounted(() => {
  if (!authStore.isAuthenticated || !authStore.isAdmin) {
    router.push('/login')
    return
  }
  
  loadStats()
})
</script> 