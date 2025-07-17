<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const mobileMenuOpen = ref(false)
const showUserMenu = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Members', href: '/members' },
  { name: 'Lessons', href: '/lessons' },
  { name: 'Contact', href: '/contact' }
]

const handleLogout = async () => {
  await authStore.logout()
  showUserMenu.value = false
  router.push('/login')
}

onMounted(() => {
  authStore.initializeAuth()
})
</script>

<template>
  <div id="app" class="min-h-screen bg-chess-cream">
    <!-- Navigation -->
    <nav class="bg-chess-dark shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <h1 class="text-chess-gold font-chess text-2xl font-bold">♔ PawnUp Chess Club</h1>
            </div>
          </div>
          
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link 
                v-for="item in navigation" 
                :key="item.name"
                :to="item.href"
                :class="[
                  $route.path === item.href
                    ? 'bg-chess-gold text-white'
                    : 'text-chess-light hover:bg-chess-gold hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
                ]"
              >
                {{ item.name }}
              </router-link>
              
              <!-- Authentication Links -->
              <div v-if="!authStore.isAuthenticated" class="flex items-center space-x-2">
                <router-link to="/login" class="bg-chess-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Login</router-link>
                <router-link to="/register" class="border border-chess-gold text-chess-gold hover:bg-chess-gold hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Register</router-link>
              </div>
              
              <!-- User Menu -->
              <div v-else class="relative">
                <button @click="showUserMenu = !showUserMenu" class="flex items-center space-x-2 text-chess-light hover:text-chess-gold transition-colors">
                  <span>{{ authStore.user?.name }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <!-- Dropdown Menu -->
                <div v-if="showUserMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <router-link to="/dashboard" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</router-link>
                  <router-link v-if="authStore.isAdmin" to="/admin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin Panel</router-link>
                  <button @click="handleLogout" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-chess-light hover:text-white"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            :class="[
              $route.path === item.href
                ? 'bg-chess-gold text-white'
                : 'text-chess-light hover:bg-chess-gold hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
            ]"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-chess-dark text-chess-light mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-chess-gold font-chess text-xl font-bold mb-4">♔ PawnUp Chess Club</h3>
            <p class="text-sm">Promoting the game of chess and building a community of passionate players.</p>
          </div>
          <div>
            <h4 class="text-chess-gold font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><router-link to="/events" class="hover:text-chess-gold transition-colors">Events</router-link></li>
              <li><router-link to="/lessons" class="hover:text-chess-gold transition-colors">Lessons</router-link></li>
              <li><router-link to="/members" class="hover:text-chess-gold transition-colors">Members</router-link></li>
              <li><router-link to="/contact" class="hover:text-chess-gold transition-colors">Contact</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-chess-gold font-semibold mb-4">Contact Info</h4>
            <div class="text-sm space-y-2">
              <p>📍 123 PawnUp Street, City</p>
              <p>📧 info@pawnup.com</p>
              <p>📞 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 PawnUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
