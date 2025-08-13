<script setup>
import ExampleComponent from './components/ExampleComponent.vue'
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold">Your Website</h1>
        <nav class="mt-4">
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-gray-300">Home</a></li>
            <li><a href="#" class="hover:text-gray-300">About</a></li>
            <li><a href="#" class="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto p-8">
      <h2 class="text-3xl font-bold mb-6">Welcome to Your Website</h2>
      <p class="text-lg text-gray-600 mb-8">
        This is a blank template. Start building your website by editing the components and adding your content.
      </p>
      
      <!-- Example Component -->
      <ExampleComponent />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 mt-16">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Your custom styles go here */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
