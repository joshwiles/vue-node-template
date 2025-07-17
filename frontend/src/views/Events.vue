<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-chess-dark to-chess-brown text-white py-16 rounded-lg mb-16">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-chess font-bold mb-6">PawnUp Events</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Join us for tournaments, workshops, and social events. There's something for players of all skill levels!
        </p>
      </div>
    </section>

    <!-- Event Categories -->
    <section class="mb-16">
      <div class="flex flex-wrap gap-4 mb-8">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            selectedCategory === category.id 
              ? 'bg-chess-gold text-white' 
              : 'bg-white text-chess-dark hover:bg-gray-100',
            'px-4 py-2 rounded-lg font-semibold transition-colors'
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="event in filteredEvents" 
          :key="event.id"
          class="card hover:shadow-xl transition-shadow"
        >
          <div class="flex justify-between items-start mb-4">
            <span :class="getEventTypeClass(event.type)" class="px-3 py-1 rounded-full text-sm font-semibold">
              {{ event.type }}
            </span>
            <span class="text-chess-gold font-semibold">{{ event.date }}</span>
          </div>
          
          <h3 class="text-xl font-semibold mb-3">{{ event.title }}</h3>
          <p class="text-gray-600 mb-4">{{ event.description }}</p>
          
          <div class="space-y-2 mb-6">
            <div class="flex items-center text-sm text-gray-500">
              <span class="mr-2">📍</span>
              {{ event.location }}
            </div>
            <div class="flex items-center text-sm text-gray-500">
              <span class="mr-2">⏰</span>
              {{ event.time }}
            </div>
            <div class="flex items-center text-sm text-gray-500">
              <span class="mr-2">👥</span>
              {{ event.participants }} participants
            </div>
            <div class="flex items-center text-sm text-gray-500">
              <span class="mr-2">💰</span>
              {{ event.fee }}
            </div>
          </div>
          
          <button 
            @click="registerForEvent(event.id)"
            :disabled="event.isRegistered"
            :class="[
              event.isRegistered 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-chess-gold hover:bg-yellow-600 text-white',
              'w-full py-2 px-4 rounded-lg font-semibold transition-colors'
            ]"
          >
            {{ event.isRegistered ? 'Registered' : 'Register Now' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Event Calendar -->
    <section class="mb-16">
      <h2 class="section-title text-center">Event Calendar</h2>
      <div class="card">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="month in upcomingMonths" :key="month.name" class="text-center">
            <h3 class="text-lg font-semibold text-chess-gold mb-4">{{ month.name }}</h3>
            <div class="space-y-2">
              <div 
                v-for="event in month.events" 
                :key="event.id"
                class="text-sm p-2 bg-gray-50 rounded"
              >
                <div class="font-semibold">{{ event.day }}</div>
                <div class="text-gray-600">{{ event.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tournament Results -->
    <section class="mb-16">
      <h2 class="section-title text-center">Recent Tournament Results</h2>
      <div class="card">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 px-4 font-semibold">Tournament</th>
                <th class="text-left py-3 px-4 font-semibold">Date</th>
                <th class="text-left py-3 px-4 font-semibold">Winner</th>
                <th class="text-left py-3 px-4 font-semibold">Runner-up</th>
                <th class="text-left py-3 px-4 font-semibold">Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="result in tournamentResults" :key="result.id" class="border-b border-gray-100">
                <td class="py-3 px-4">{{ result.tournament }}</td>
                <td class="py-3 px-4">{{ result.date }}</td>
                <td class="py-3 px-4 font-semibold text-chess-gold">{{ result.winner }}</td>
                <td class="py-3 px-4">{{ result.runnerUp }}</td>
                <td class="py-3 px-4">{{ result.participants }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Event Registration Modal -->
    <div v-if="showEventModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h3 class="text-xl font-semibold mb-4">Register for {{ selectedEvent?.title }}</h3>
        <form @submit.prevent="submitRegistration">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                v-model="registrationForm.name"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                v-model="registrationForm.email"
                type="email" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                v-model="registrationForm.phone"
                type="tel"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
            </div>
          </div>
          <div class="flex space-x-4 mt-6">
            <button 
              type="button"
              @click="showEventModal = false"
              class="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="flex-1 btn-primary"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

// Get API URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const authStore = useAuthStore()
const events = ref([])
const filteredEvents = ref([])
const selectedEvent = ref(null)
const showEventModal = ref(false)
const isLoading = ref(true)
const error = ref(null)
const selectedCategory = ref('all')
const searchQuery = ref('')

const registrationForm = ref({
  name: '',
  email: '',
  phone: ''
})

const categories = [
  { id: 'all', name: 'All Events' },
  { id: 'tournament', name: 'Tournaments' },
  { id: 'workshop', name: 'Workshops' },
  { id: 'social', name: 'Social Events' }
]

const upcomingMonths = ref([
  {
    name: 'March',
    events: [
      { id: 1, day: '15th', title: 'Endgame Masterclass' },
      { id: 2, day: '22nd', title: 'Spring Championship' },
      { id: 3, day: '29th', title: 'Youth Tournament' }
    ]
  },
  {
    name: 'April',
    events: [
      { id: 4, day: '5th', title: 'Opening Theory Workshop' },
      { id: 5, day: '12th', title: 'Rapid Tournament' },
      { id: 6, day: '19th', title: 'Team Championship' }
    ]
  },
  {
    name: 'May',
    events: [
      { id: 7, day: '3rd', title: 'Tactics Training' },
      { id: 8, day: '10th', title: 'Blitz Championship' },
      { id: 9, day: '17th', title: 'Summer Open' }
    ]
  },
  {
    name: 'June',
    events: [
      { id: 10, day: '7th', title: 'Chess Camp' },
      { id: 11, day: '14th', title: 'Club Championship' },
      { id: 12, day: '21st', title: 'Family Tournament' }
    ]
  }
])

const tournamentResults = ref([
  {
    id: 1,
    tournament: 'Winter Championship 2024',
    date: 'February 15th',
    winner: 'GM Sarah Chen',
    runnerUp: 'IM David Rodriguez',
    participants: 32
  },
  {
    id: 2,
    tournament: 'Blitz Tournament',
    date: 'February 8th',
    winner: 'FM Emily Watson',
    runnerUp: 'John Smith',
    participants: 24
  },
  {
    id: 3,
    tournament: 'Youth Championship',
    date: 'January 28th',
    winner: 'Alex Johnson',
    runnerUp: 'Maria Garcia',
    participants: 18
  }
])

const getEventTypeClass = (type) => {
  const classes = {
    tournament: 'bg-red-100 text-red-800',
    workshop: 'bg-blue-100 text-blue-800',
    social: 'bg-green-100 text-green-800'
  }
  return classes[type] || 'bg-gray-100 text-gray-800'
}

const fetchEvents = async () => {
  try {
    isLoading.value = true
    const response = await fetch(`${API_URL}/api/events`)
    if (!response.ok) throw new Error('Failed to fetch events')
    const data = await response.json()
    events.value = data.events
    filteredEvents.value = data.events
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

const registerForEvent = async (eventId) => {
  try {
    const response = await fetch(`${API_URL}/api/events/${eventId}/register`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
        'Content-Type': 'application/json'
      }
    })
    
    if (!response.ok) throw new Error('Failed to register for event')
    
    // Update the event in the list
    const eventIndex = events.value.findIndex(e => e.id === eventId)
    if (eventIndex !== -1) {
      events.value[eventIndex].isRegistered = true
      events.value[eventIndex].registeredCount++
    }
    
    // Update filtered events
    applyFilters()
  } catch (err) {
    error.value = err.message
  }
}

const unregisterFromEvent = async (eventId) => {
  try {
    const response = await fetch(`${API_URL}/api/events/${eventId}/unregister`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
        'Content-Type': 'application/json'
      }
    })
    
    if (!response.ok) throw new Error('Failed to unregister from event')
    
    // Update the event in the list
    const eventIndex = events.value.findIndex(e => e.id === eventId)
    if (eventIndex !== -1) {
      events.value[eventIndex].isRegistered = false
      events.value[eventIndex].registeredCount--
    }
    
    // Update filtered events
    applyFilters()
  } catch (err) {
    error.value = err.message
  }
}

const submitRegistration = () => {
  // Here you would typically send the registration to your backend
  console.log('Registration submitted:', registrationForm.value)
  
  // Update the event to show as registered
  const event = events.value.find(e => e.id === selectedEvent.value.id)
  if (event) {
    event.registered = true
    event.participants = event.participants.split('/')[0] + '/' + event.participants.split('/')[1]
  }
  
  // Reset form and close modal
  registrationForm.value = { name: '', email: '', phone: '' }
  showEventModal.value = false
  selectedEvent.value = null
}
</script> 