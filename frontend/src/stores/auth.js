import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Get API URL from environment variable or default to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const isLoading = ref(false)
  const error = ref(null)

  // Getters
  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  const isMember = computed(() => user.value?.role === 'member' || user.value?.role === 'admin')
  const userRole = computed(() => user.value?.role || 'guest')

  // Actions
  const login = async (email, password) => {
    isLoading.value = true
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Store token and user data
      token.value = data.data.token
      user.value = data.data.user
      localStorage.setItem('token', data.data.token)

      return { success: true, message: data.message }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: error.message }
    } finally {
      isLoading.value = false
    }
  }

  const register = async (userData) => {
    isLoading.value = true
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      // Store token and user data
      token.value = data.data.token
      user.value = data.data.user
      localStorage.setItem('token', data.data.token)

      return { success: true, message: data.message }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, message: error.message }
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      // Call logout endpoint
      await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear local state regardless of API call success
      token.value = null
      user.value = null
      localStorage.removeItem('token')
    }
  }

  const fetchProfile = async () => {
    if (!token.value) return

    try {
      const response = await fetch(`${API_URL}/api/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${token.value}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        user.value = data.data
      } else {
        // Token might be invalid, clear it
        logout()
      }
    } catch (error) {
      console.error('Fetch profile error:', error)
      logout()
    }
  }

  const updateProfile = async (profileData) => {
    isLoading.value = true
    try {
      const response = await fetch(`${API_URL}/api/auth/profile`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Profile update failed')
      }

      user.value = data.data
      return { success: true, message: data.message }
    } catch (error) {
      console.error('Update profile error:', error)
      return { success: false, message: error.message }
    } finally {
      isLoading.value = false
    }
  }

  const initializeAuth = async () => {
    if (token.value) {
      await fetchProfile()
    }
  }

  // Helper function to make authenticated API calls
  const apiCall = async (url, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (token.value) {
      headers.Authorization = `Bearer ${token.value}`
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (response.status === 401) {
      // Token expired or invalid
      logout()
      throw new Error('Authentication required')
    }

    return response
  }

  return {
    // State
    user,
    token,
    isLoading,
    
    // Getters
    isAuthenticated,
    isAdmin,
    isMember,
    userRole,
    
    // Actions
    login,
    register,
    logout,
    fetchProfile,
    updateProfile,
    initializeAuth,
    apiCall,
  }
}) 