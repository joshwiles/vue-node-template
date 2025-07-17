import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'

// Import components
import Home from './views/Home.vue'
import About from './views/About.vue'
import Events from './views/Events.vue'
import Members from './views/Members.vue'
import Contact from './views/Contact.vue'
import Lessons from './views/Lessons.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './views/Dashboard.vue'
import Admin from './views/Admin.vue'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/events', component: Events },
    { path: '/members', component: Members },
    { path: '/contact', component: Contact },
    { path: '/lessons', component: Lessons },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard },
    { path: '/admin', component: Admin }
  ]
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
