<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-chess-dark to-chess-brown text-white py-20 rounded-lg mb-16">
      <div class="absolute inset-0 bg-chess-pattern opacity-10"></div>
      <div class="relative z-10 text-center">
        <h1 class="text-5xl md:text-6xl font-chess font-bold mb-6">
          Welcome to <span class="text-chess-gold">PawnUp Chess Club</span>
        </h1>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Join our community of chess enthusiasts. Learn, play, and improve your game with fellow players of all skill levels.
        </p>
        <div class="space-x-4">
          <router-link to="/events" class="btn-primary text-lg px-8 py-3">
            Join an Event
          </router-link>
          <router-link to="/lessons" class="btn-secondary text-lg px-8 py-3">
            Take Lessons
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="mb-16">
      <h2 class="section-title text-center">Why Join Our Chess Club?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card text-center">
          <div class="text-4xl mb-4">♟️</div>
          <h3 class="text-xl font-semibold mb-3">Learn from Experts</h3>
          <p class="text-gray-600">Get instruction from experienced players and certified chess coaches.</p>
        </div>
        <div class="card text-center">
          <div class="text-4xl mb-4">🏆</div>
          <h3 class="text-xl font-semibold mb-3">Compete & Grow</h3>
          <p class="text-gray-600">Participate in tournaments and friendly matches to improve your skills.</p>
        </div>
        <div class="card text-center">
          <div class="text-4xl mb-4">🤝</div>
          <h3 class="text-xl font-semibold mb-3">Build Community</h3>
          <p class="text-gray-600">Connect with fellow chess enthusiasts and make lasting friendships.</p>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Preview -->
    <section class="mb-16">
      <div class="flex justify-between items-center mb-8">
        <h2 class="section-title">Upcoming Events</h2>
        <router-link to="/events" class="text-chess-gold hover:underline font-semibold">
          View All Events →
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
          <div class="text-chess-gold font-semibold mb-2">This Saturday</div>
          <h3 class="text-lg font-semibold mb-2">Beginner's Tournament</h3>
          <p class="text-gray-600 mb-4">Perfect for new players to test their skills in a friendly environment.</p>
          <div class="text-sm text-gray-500">📍 Club Hall | ⏰ 2:00 PM</div>
        </div>
        <div class="card">
          <div class="text-chess-gold font-semibold mb-2">Next Wednesday</div>
          <h3 class="text-lg font-semibold mb-2">Strategy Workshop</h3>
          <p class="text-gray-600 mb-4">Learn advanced opening strategies and middle game tactics.</p>
          <div class="text-sm text-gray-500">📍 Club Hall | ⏰ 7:00 PM</div>
        </div>
        <div class="card">
          <div class="text-chess-gold font-semibold mb-2">Next Saturday</div>
          <h3 class="text-lg font-semibold mb-2">Blitz Tournament</h3>
          <p class="text-gray-600 mb-4">Fast-paced 5-minute games for experienced players.</p>
          <div class="text-sm text-gray-500">📍 Club Hall | ⏰ 1:00 PM</div>
        </div>
      </div>
    </section>

    <!-- Membership CTA -->
    <section class="bg-chess-gold text-white py-12 rounded-lg text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Join?</h2>
      <p class="text-xl mb-6">Become a member and start your chess journey today!</p>
      <router-link to="/contact" class="bg-white text-chess-gold font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
        Get Started
      </router-link>
    </section>
  </div>
</template>

<script setup>
// Component logic can be added here
</script> 