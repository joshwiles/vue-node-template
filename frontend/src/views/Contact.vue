<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-chess-dark to-chess-brown text-white py-16 rounded-lg mb-16">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-chess font-bold mb-6">Contact PawnUp</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Get in touch with us to learn more about our chess club, ask questions, or join our community.
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="mb-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Details -->
        <div>
          <h2 class="section-title">Get in Touch</h2>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white text-xl">
                📍
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Visit Us</h3>
                <p class="text-gray-600">123 Chess Street<br>City, State 12345</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white text-xl">
                📧
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Email Us</h3>
                <p class="text-gray-600">info@pawnup.com<br>coaching@pawnup.com</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white text-xl">
                📞
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Call Us</h3>
                <p class="text-gray-600">(555) 123-4567<br>(555) 987-6543</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white text-xl">
                ⏰
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Club Hours</h3>
                <p class="text-gray-600">
                  Monday - Friday: 4:00 PM - 10:00 PM<br>
                  Saturday: 10:00 AM - 6:00 PM<br>
                  Sunday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="section-title">Send us a Message</h2>
          <form @submit.prevent="submitContactForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input 
                  v-model="contactForm.firstName"
                  type="text" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input 
                  v-model="contactForm.lastName"
                  type="text" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
                >
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                v-model="contactForm.email"
                type="email" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                v-model="contactForm.phone"
                type="tel"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select 
                v-model="contactForm.subject"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="membership">Membership Inquiry</option>
                <option value="lessons">Chess Lessons</option>
                <option value="events">Events & Tournaments</option>
                <option value="general">General Question</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                v-model="contactForm.message"
                rows="5"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-gold focus:border-transparent"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            
            <button type="submit" class="btn-primary w-full py-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Location & Map -->
    <section class="mb-16">
      <h2 class="section-title text-center">Find Us</h2>
      <div class="card">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Club Location</h3>
            <p class="text-gray-600 mb-6">
              Our chess club is conveniently located in the heart of the city, 
              easily accessible by public transportation and with plenty of parking available.
            </p>
            
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-700 mb-2">Getting Here</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Subway: Take Line A to Chess Street Station</li>
                  <li>• Bus: Routes 15, 23, and 45 stop nearby</li>
                  <li>• Parking: Free parking available in the adjacent lot</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-700 mb-2">Facilities</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• 20 tournament-quality chess boards</li>
                  <li>• Digital clocks and score sheets</li>
                  <li>• Coffee and refreshments available</li>
                  <li>• Free Wi-Fi for members</li>
                  <li>• Wheelchair accessible</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-200 rounded-lg flex items-center justify-center h-64">
            <div class="text-center text-gray-500">
              <div class="text-4xl mb-2">🗺️</div>
              <p>Interactive Map</p>
              <p class="text-sm">(Map integration would go here)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="mb-16">
      <h2 class="section-title text-center">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <div v-for="faq in faqs" :key="faq.id" class="card">
          <button 
            @click="toggleFaq(faq.id)"
            class="w-full text-left flex justify-between items-center"
          >
            <h3 class="text-lg font-semibold">{{ faq.question }}</h3>
            <span class="text-chess-gold text-xl">
              {{ expandedFaqs.includes(faq.id) ? '−' : '+' }}
            </span>
          </button>
          <div v-if="expandedFaqs.includes(faq.id)" class="mt-4 text-gray-600">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media -->
    <section class="mb-16">
      <h2 class="section-title text-center">Follow Us</h2>
      <div class="flex justify-center space-x-6">
        <a href="#" class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors">
          <span class="text-xl">📘</span>
        </a>
        <a href="#" class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors">
          <span class="text-xl">📷</span>
        </a>
        <a href="#" class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors">
          <span class="text-xl">🐦</span>
        </a>
        <a href="#" class="w-12 h-12 bg-chess-gold rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors">
          <span class="text-xl">📺</span>
        </a>
      </div>
    </section>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <div class="text-4xl mb-4">✅</div>
        <h3 class="text-xl font-semibold mb-4">Message Sent!</h3>
        <p class="text-gray-600 mb-6">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <button 
          @click="showSuccessModal = false"
          class="btn-primary"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showSuccessModal = ref(false)
const expandedFaqs = ref([])

const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const faqs = ref([
  {
    id: 1,
    question: 'How do I become a member?',
    answer: 'You can become a member by visiting our club during open hours, filling out a membership application, and paying the annual fee. We also offer trial memberships for new players.'
  },
  {
    id: 2,
    question: 'What are the membership fees?',
    answer: 'Annual membership is $120 for adults, $80 for seniors (65+), and $60 for juniors (under 18). We also offer family memberships and monthly payment plans.'
  },
  {
    id: 3,
    question: 'Do you offer lessons for beginners?',
    answer: 'Yes! We have structured lesson programs for all skill levels, from complete beginners to advanced players. Our coaches are experienced and certified.'
  },
  {
    id: 4,
    question: 'Can I bring my own chess set?',
    answer: 'Absolutely! While we provide tournament-quality sets, you\'re welcome to bring your own. We also have a variety of sets available for purchase.'
  },
  {
    id: 5,
    question: 'Do you host tournaments?',
    answer: 'Yes, we host regular tournaments including monthly rated tournaments, blitz tournaments, and special events. Check our Events page for the current schedule.'
  },
  {
    id: 6,
    question: 'Is there parking available?',
    answer: 'Yes, we have free parking available in the adjacent lot. The club is also easily accessible by public transportation.'
  }
])

const toggleFaq = (id) => {
  const index = expandedFaqs.value.indexOf(id)
  if (index > -1) {
    expandedFaqs.value.splice(index, 1)
  } else {
    expandedFaqs.value.push(id)
  }
}

const submitContactForm = () => {
  // Here you would typically send the form to your backend
  console.log('Contact form submitted:', contactForm.value)
  
  // Reset form and show success modal
  contactForm.value = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' }
  showSuccessModal.value = true
}
</script> 