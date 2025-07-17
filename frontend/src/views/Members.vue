<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-chess-dark to-chess-brown text-white py-16 rounded-lg mb-16">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-chess font-bold mb-6">PawnUp Members</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Meet the talented players who make our chess club a vibrant and competitive community.
        </p>
      </div>
    </section>

    <!-- Member Stats -->
    <section class="mb-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="card text-center">
          <div class="text-3xl font-bold text-chess-gold mb-2">{{ totalMembers }}</div>
          <div class="text-gray-600">Total Members</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-chess-gold mb-2">{{ activeMembers }}</div>
          <div class="text-gray-600">Active Members</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-chess-gold mb-2">{{ juniorMembers }}</div>
          <div class="text-gray-600">Junior Members</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-chess-gold mb-2">{{ titledPlayers }}</div>
          <div class="text-gray-600">Titled Players</div>
        </div>
      </div>
    </section>

    <!-- Top Players -->
    <section class="mb-16">
      <h2 class="section-title text-center">Top Rated Players</h2>
      <div class="card">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 px-4 font-semibold">Rank</th>
                <th class="text-left py-3 px-4 font-semibold">Player</th>
                <th class="text-left py-3 px-4 font-semibold">Rating</th>
                <th class="text-left py-3 px-4 font-semibold">Title</th>
                <th class="text-left py-3 px-4 font-semibold">Games</th>
                <th class="text-left py-3 px-4 font-semibold">Win Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(player, index) in topPlayers" :key="player.id" class="border-b border-gray-100 hover:bg-gray-50">
                <td class="py-3 px-4">
                  <div class="flex items-center">
                    <span class="text-lg font-bold text-chess-gold mr-2">{{ index + 1 }}</span>
                    <div v-if="index < 3" class="text-2xl">
                      {{ index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉' }}
                    </div>
                  </div>
                </td>
                <td class="py-3 px-4">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-chess-gold rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {{ player.name.charAt(0) }}
                    </div>
                    <div>
                      <div class="font-semibold">{{ player.name }}</div>
                      <div class="text-sm text-gray-500">Member since {{ player.memberSince }}</div>
                    </div>
                  </div>
                </td>
                <td class="py-3 px-4 font-bold text-lg">{{ player.rating }}</td>
                <td class="py-3 px-4">
                  <span :class="getTitleClass(player.title)" class="px-2 py-1 rounded text-sm font-semibold">
                    {{ player.title }}
                  </span>
                </td>
                <td class="py-3 px-4">{{ player.games }}</td>
                <td class="py-3 px-4">
                  <div class="flex items-center">
                    <span class="font-semibold">{{ player.winRate }}%</span>
                    <div class="ml-2 w-16 bg-gray-200 rounded-full h-2">
                      <div :style="{ width: player.winRate + '%' }" class="bg-chess-gold h-2 rounded-full"></div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Member Categories -->
    <section class="mb-16">
      <div class="flex flex-wrap gap-4 mb-8">
        <button 
          v-for="category in memberCategories" 
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

      <!-- Members Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="member in filteredMembers" 
          :key="member.id"
          class="card hover:shadow-xl transition-shadow cursor-pointer"
          @click="showMemberModal = true; selectedMember = member"
        >
          <div class="text-center">
            <div class="w-24 h-24 bg-chess-gold rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              {{ member.name.charAt(0) }}
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p class="text-chess-gold font-semibold mb-2">{{ member.title }}</p>
            <p class="text-gray-600 text-sm mb-4">{{ member.location }}</p>
            
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div class="font-semibold text-gray-700">Rating</div>
                <div class="text-chess-gold">{{ member.rating }}</div>
              </div>
              <div>
                <div class="font-semibold text-gray-700">Games</div>
                <div class="text-chess-gold">{{ member.games }}</div>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-200">
              <div class="flex justify-center space-x-2">
                <span v-for="achievement in member.achievements.slice(0, 3)" :key="achievement" class="text-xs bg-chess-light px-2 py-1 rounded">
                  {{ achievement }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Achievements -->
    <section class="mb-16">
      <h2 class="section-title text-center">Recent Achievements</h2>
      <div class="space-y-4">
        <div v-for="achievement in recentAchievements" :key="achievement.id" class="card">
          <div class="flex items-center">
            <div class="text-3xl mr-4">🏆</div>
            <div class="flex-1">
              <h3 class="font-semibold">{{ achievement.title }}</h3>
              <p class="text-gray-600">{{ achievement.description }}</p>
              <div class="text-sm text-gray-500 mt-1">
                {{ achievement.member }} • {{ achievement.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Member Modal -->
    <div v-if="showMemberModal && selectedMember" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-start mb-6">
          <h3 class="text-2xl font-semibold">{{ selectedMember.name }}</h3>
          <button @click="showMemberModal = false" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="w-32 h-32 bg-chess-gold rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              {{ selectedMember.name.charAt(0) }}
            </div>
            
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-700">Title</h4>
                <p class="text-chess-gold">{{ selectedMember.title }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-700">Location</h4>
                <p>{{ selectedMember.location }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-700">Member Since</h4>
                <p>{{ selectedMember.memberSince }}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-700 mb-3">Statistics</h4>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span>Rating:</span>
                <span class="font-semibold text-chess-gold">{{ selectedMember.rating }}</span>
              </div>
              <div class="flex justify-between">
                <span>Games Played:</span>
                <span class="font-semibold">{{ selectedMember.games }}</span>
              </div>
              <div class="flex justify-between">
                <span>Win Rate:</span>
                <span class="font-semibold">{{ selectedMember.winRate }}%</span>
              </div>
              <div class="flex justify-between">
                <span>Tournaments Won:</span>
                <span class="font-semibold">{{ selectedMember.tournamentsWon }}</span>
              </div>
            </div>
            
            <h4 class="font-semibold text-gray-700 mt-6 mb-3">Achievements</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="achievement in selectedMember.achievements" :key="achievement" class="bg-chess-light px-3 py-1 rounded-full text-sm">
                {{ achievement }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('all')
const showMemberModal = ref(false)
const selectedMember = ref(null)

const totalMembers = 156
const activeMembers = 142
const juniorMembers = 45
const titledPlayers = 8

const memberCategories = [
  { id: 'all', name: 'All Members' },
  { id: 'titled', name: 'Titled Players' },
  { id: 'junior', name: 'Junior Members' },
  { id: 'senior', name: 'Senior Members' }
]

const topPlayers = ref([
  {
    id: 1,
    name: 'Sarah Chen',
    rating: 2450,
    title: 'GM',
    games: 156,
    winRate: 78,
    memberSince: '2010'
  },
  {
    id: 2,
    name: 'David Rodriguez',
    rating: 2380,
    title: 'IM',
    games: 142,
    winRate: 72,
    memberSince: '2012'
  },
  {
    id: 3,
    name: 'Emily Watson',
    rating: 2320,
    title: 'FM',
    games: 128,
    winRate: 68,
    memberSince: '2015'
  },
  {
    id: 4,
    name: 'Michael Johnson',
    rating: 2280,
    title: 'CM',
    games: 95,
    winRate: 65,
    memberSince: '2018'
  },
  {
    id: 5,
    name: 'Alex Thompson',
    rating: 2250,
    title: 'CM',
    games: 87,
    winRate: 62,
    memberSince: '2019'
  }
])

const members = ref([
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Grandmaster',
    location: 'New York, NY',
    rating: 2450,
    games: 156,
    winRate: 78,
    tournamentsWon: 12,
    memberSince: '2010',
    achievements: ['National Champion', 'Club President', 'Youth Coach'],
    category: 'titled'
  },
  {
    id: 2,
    name: 'David Rodriguez',
    title: 'International Master',
    location: 'Los Angeles, CA',
    rating: 2380,
    games: 142,
    winRate: 72,
    tournamentsWon: 8,
    memberSince: '2012',
    achievements: ['Head Coach', 'Opening Expert', 'Team Captain'],
    category: 'titled'
  },
  {
    id: 3,
    name: 'Emily Watson',
    title: 'FIDE Master',
    location: 'Chicago, IL',
    rating: 2320,
    games: 128,
    winRate: 68,
    tournamentsWon: 6,
    memberSince: '2015',
    achievements: ['Tournament Director', 'Endgame Specialist'],
    category: 'titled'
  },
  {
    id: 4,
    name: 'Alex Johnson',
    title: 'Candidate Master',
    location: 'Boston, MA',
    rating: 2280,
    games: 95,
    winRate: 65,
    tournamentsWon: 3,
    memberSince: '2018',
    achievements: ['Rapid Champion', 'Tactics Trainer'],
    category: 'titled'
  },
  {
    id: 5,
    name: 'Maria Garcia',
    title: 'Club Player',
    location: 'Miami, FL',
    rating: 1850,
    games: 67,
    winRate: 58,
    tournamentsWon: 1,
    memberSince: '2020',
    achievements: ['Most Improved', 'Social Coordinator'],
    category: 'senior'
  },
  {
    id: 6,
    name: 'James Wilson',
    title: 'Club Player',
    location: 'Seattle, WA',
    rating: 1920,
    games: 89,
    winRate: 61,
    tournamentsWon: 2,
    memberSince: '2019',
    achievements: ['Blitz Champion', 'Equipment Manager'],
    category: 'senior'
  },
  {
    id: 7,
    name: 'Sophie Brown',
    title: 'Junior Player',
    location: 'Denver, CO',
    rating: 1650,
    games: 45,
    winRate: 52,
    tournamentsWon: 0,
    memberSince: '2022',
    achievements: ['Youth Champion', 'Rising Star'],
    category: 'junior'
  },
  {
    id: 8,
    name: 'Lucas Davis',
    title: 'Junior Player',
    location: 'Austin, TX',
    rating: 1580,
    games: 38,
    winRate: 48,
    tournamentsWon: 0,
    memberSince: '2023',
    achievements: ['Most Promising', 'Chess Scholar'],
    category: 'junior'
  }
])

const recentAchievements = ref([
  {
    id: 1,
    title: 'National Championship Victory',
    description: 'Won the 2024 National Chess Championship with a perfect score',
    member: 'Sarah Chen',
    date: 'February 15, 2024'
  },
  {
    id: 2,
    title: 'Youth Tournament Champion',
    description: 'First place in the Under-18 Regional Championship',
    member: 'Sophie Brown',
    date: 'February 8, 2024'
  },
  {
    id: 3,
    title: 'Rating Milestone',
    description: 'Reached 2300 rating for the first time',
    member: 'Alex Johnson',
    date: 'January 28, 2024'
  },
  {
    id: 4,
    title: 'Blitz Tournament Winner',
    description: 'Won the monthly blitz tournament with 9/10 points',
    member: 'James Wilson',
    date: 'January 20, 2024'
  }
])

const filteredMembers = computed(() => {
  if (selectedCategory.value === 'all') {
    return members.value
  }
  return members.value.filter(member => member.category === selectedCategory.value)
})

const getTitleClass = (title) => {
  const classes = {
    'GM': 'bg-yellow-100 text-yellow-800',
    'IM': 'bg-blue-100 text-blue-800',
    'FM': 'bg-green-100 text-green-800',
    'CM': 'bg-purple-100 text-purple-800'
  }
  return classes[title] || 'bg-gray-100 text-gray-800'
}
</script> 