<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-chess-dark to-chess-brown text-white py-16 rounded-lg mb-16">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-chess font-bold mb-6">PawnUp Chess Lessons</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Learn from experienced coaches and improve your game with structured lessons for all skill levels.
        </p>
      </div>
    </section>

    <!-- Lesson Programs -->
    <section class="mb-16">
      <h2 class="section-title text-center">Learning Programs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card text-center hover:shadow-xl transition-shadow">
          <div class="text-4xl mb-4">🌱</div>
          <h3 class="text-xl font-semibold mb-3">Beginner Program</h3>
          <p class="text-gray-600 mb-6">Perfect for new players learning the fundamentals of chess.</p>
          <ul class="text-left space-y-2 mb-6">
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Basic rules and piece movements
            </li>
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Simple tactics and checkmates
            </li>
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Opening principles
            </li>
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Game analysis basics
            </li>
          </ul>
          <div class="text-2xl font-bold text-chess-gold mb-4">$25/hour</div>
          <button @click="bookLesson('beginner')" class="btn-primary w-full">
            Book Lesson
          </button>
        </div>

        <div class="card text-center hover:shadow-xl transition-shadow border-2 border-chess-gold">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-xl font-semibold mb-3">Intermediate Program</h3>
          <p class="text-gray-600 mb-6">For players looking to improve their tactical and strategic skills.</p>
          <ul class="text-left space-y-2 mb-6">
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Advanced tactics and combinations
            </li>
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Opening theory and repertoire
            </li>
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Middle game strategy
            </li>
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Endgame technique
            </li>
          </ul>
          <div class="text-2xl font-bold text-chess-gold mb-4">$35/hour</div>
          <button @click="bookLesson('intermediate')" class="btn-primary w-full">
            Book Lesson
          </button>
        </div>

        <div class="card text-center hover:shadow-xl transition-shadow">
          <div class="text-4xl mb-4">🏆</div>
          <h3 class="text-xl font-semibold mb-3">Advanced Program</h3>
          <p class="text-gray-600 mb-6">For serious players aiming for tournament success.</p>
          <ul class="text-left space-y-2 mb-6">
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Grandmaster-level analysis
            </li>
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Advanced opening preparation
            </li>
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Complex endgame studies
            </li>
            <li class="flex items-center">
              <span class="text-chess-gold mr-2">✓</span>
              Tournament preparation
            </li>
          </ul>
          <div class="text-2xl font-bold text-chess-gold mb-4">$50/hour</div>
          <button @click="bookLesson('advanced')" class="btn-primary w-full">
            Book Lesson
          </button>
        </div>
      </div>
    </section>

    <!-- Coaches -->
    <section class="mb-16">
      <h2 class="section-title text-center">Our Coaches</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card text-center">
          <div class="w-32 h-32 bg-chess-gold rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
            GM
          </div>
          <h3 class="text-xl font-semibold mb-2">Grandmaster Sarah Chen</h3>
          <p class="text-chess-gold font-semibold mb-2">Head Coach</p>
          <p class="text-gray-600 text-sm mb-4">
            International Master with 20+ years of teaching experience. 
            Specializes in advanced strategy and tournament preparation.
          </p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span>Rating:</span>
              <span class="font-semibold text-chess-gold">2450</span>
            </div>
            <div class="flex justify-between">
              <span>Experience:</span>
              <span class="font-semibold">20+ years</span>
            </div>
            <div class="flex justify-between">
              <span>Students:</span>
              <span class="font-semibold">150+</span>
            </div>
          </div>
        </div>

        <div class="card text-center">
          <div class="w-32 h-32 bg-chess-dark rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
            IM
          </div>
          <h3 class="text-xl font-semibold mb-2">International Master David Rodriguez</h3>
          <p class="text-chess-gold font-semibold mb-2">Senior Coach</p>
          <p class="text-gray-600 text-sm mb-4">
            Former national champion and certified chess coach. 
            Expert in opening theory and endgame technique.
          </p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span>Rating:</span>
              <span class="font-semibold text-chess-gold">2380</span>
            </div>
            <div class="flex justify-between">
              <span>Experience:</span>
              <span class="font-semibold">15+ years</span>
            </div>
            <div class="flex justify-between">
              <span>Students:</span>
              <span class="font-semibold">120+</span>
            </div>
          </div>
        </div>

        <div class="card text-center">
          <div class="w-32 h-32 bg-chess-brown rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
            FM
          </div>
          <h3 class="text-xl font-semibold mb-2">FIDE Master Emily Watson</h3>
          <p class="text-chess-gold font-semibold mb-2">Youth Coach</p>
          <p class="text-gray-600 text-sm mb-4">
            Specializes in teaching young players and beginners. 
            Creates engaging and fun learning experiences.
          </p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span>Rating:</span>
              <span class="font-semibold text-chess-gold">2320</span>
            </div>
            <div class="flex justify-between">
              <span>Experience:</span>
              <span class="font-semibold">10+ years</span>
            </div>
            <div class="flex justify-between">
              <span>Students:</span>
              <span class="font-semibold">80+</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lesson Schedule -->
    <section class="mb-16">
      <h2 class="section-title text-center">Lesson Schedule</h2>
      <div class="card">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="day in lessonSchedule" :key="day.name" class="text-center">
            <h3 class="text-lg font-semibold text-chess-gold mb-4">{{ day.name }}</h3>
            <div class="space-y-3">
              <div v-for="lesson in day.lessons" :key="lesson.id" class="text-sm p-3 bg-gray-50 rounded">
                <div class="font-semibold">{{ lesson.time }}</div>
                <div class="text-gray-600">{{ lesson.type }}</div>
                <div class="text-xs text-gray-500">{{ lesson.coach }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Testimonials -->
    <section class="mb-16">
      <h2 class="section-title text-center">Student Success Stories</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white font-bold mr-3">
              A
            </div>
            <div>
              <div class="font-semibold">Alex Johnson</div>
              <div class="text-sm text-gray-500">Rating: 1850 → 2280</div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "The lessons with GM Chen completely transformed my game. I went from a casual player to a serious competitor in just two years."
          </p>
        </div>

        <div class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white font-bold mr-3">
              S
            </div>
            <div>
              <div class="font-semibold">Sophie Brown</div>
              <div class="text-sm text-gray-500">Rating: 1200 → 1650</div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "FM Watson made chess fun and accessible. Her teaching style is perfect for young players like me."
          </p>
        </div>

        <div class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white font-bold mr-3">
              M
            </div>
            <div>
              <div class="font-semibold">Michael Wilson</div>
              <div class="text-sm text-gray-500">Rating: 1600 → 2100</div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "IM Rodriguez's opening lessons gave me the confidence to compete at higher levels. Highly recommended!"
          </p>
        </div>
      </div>
    </section>

    <!-- Booking Modal -->
    <div v-if="showBookingModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h3 class="text-xl font-semibold mb-4">Book a Lesson</h3>
        <form @submit.prevent="submitBooking">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                v-model="bookingForm.name"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                v-model="bookingForm.email"
                type="email" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                v-model="bookingForm.phone"
                type="tel"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Program Level</label>
              <select 
                v-model="bookingForm.level"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
                <option value="">Select a level</option>
                <option value="beginner">Beginner ($25/hour)</option>
                <option value="intermediate">Intermediate ($35/hour)</option>
                <option value="advanced">Advanced ($50/hour)</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Preferred Coach</label>
              <select 
                v-model="bookingForm.coach"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
                <option value="">Any coach</option>
                <option value="sarah">GM Sarah Chen</option>
                <option value="david">IM David Rodriguez</option>
                <option value="emily">FM Emily Watson</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea 
                v-model="bookingForm.message"
                rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
                placeholder="Tell us about your chess goals..."
              ></textarea>
            </div>
          </div>
          <div class="flex space-x-4 mt-6">
            <button 
              type="button"
              @click="showBookingModal = false"
              class="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="flex-1 btn-primary"
            >
              Book Lesson
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showBookingModal = ref(false)
const selectedLevel = ref('')

const bookingForm = ref({
  name: '',
  email: '',
  phone: '',
  level: '',
  coach: '',
  message: ''
})

const lessonSchedule = ref([
  {
    name: 'Monday',
    lessons: [
      { id: 1, time: '4:00 PM', type: 'Beginner Group', coach: 'FM Watson' },
      { id: 2, time: '6:00 PM', type: 'Intermediate', coach: 'IM Rodriguez' },
      { id: 3, time: '8:00 PM', type: 'Advanced', coach: 'GM Chen' }
    ]
  },
  {
    name: 'Wednesday',
    lessons: [
      { id: 4, time: '4:00 PM', type: 'Youth Program', coach: 'FM Watson' },
      { id: 5, time: '6:00 PM', type: 'Tactics Training', coach: 'IM Rodriguez' },
      { id: 6, time: '8:00 PM', type: 'Opening Theory', coach: 'GM Chen' }
    ]
  },
  {
    name: 'Friday',
    lessons: [
      { id: 7, time: '4:00 PM', type: 'Beginner Group', coach: 'FM Watson' },
      { id: 8, time: '6:00 PM', type: 'Endgame Study', coach: 'IM Rodriguez' },
      { id: 9, time: '8:00 PM', type: 'Tournament Prep', coach: 'GM Chen' }
    ]
  },
  {
    name: 'Saturday',
    lessons: [
      { id: 10, time: '10:00 AM', type: 'Family Chess', coach: 'FM Watson' },
      { id: 11, time: '2:00 PM', type: 'Strategy Workshop', coach: 'IM Rodriguez' },
      { id: 12, time: '4:00 PM', type: 'Game Analysis', coach: 'GM Chen' }
    ]
  }
])

const bookLesson = (level) => {
  selectedLevel.value = level
  bookingForm.value.level = level
  showBookingModal.value = true
}

const submitBooking = () => {
  // Here you would typically send the booking to your backend
  console.log('Lesson booking submitted:', bookingForm.value)
  
  // Reset form and close modal
  bookingForm.value = { name: '', email: '', phone: '', level: '', coach: '', message: '' }
  showBookingModal.value = false
  selectedLevel.value = ''
}
</script> 