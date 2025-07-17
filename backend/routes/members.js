const express = require('express');
const router = express.Router();

// Mock data for members
let members = [
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
];

// Get all members
router.get('/', (req, res) => {
  try {
    const { category } = req.query;
    let filteredMembers = members;
    
    if (category && category !== 'all') {
      filteredMembers = members.filter(member => member.category === category);
    }
    
    res.json({
      success: true,
      data: filteredMembers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch members'
    });
  }
});

// Get top rated players (must come before /:id route)
router.get('/top/players', (req, res) => {
  try {
    const topPlayers = members
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10)
      .map((member, index) => ({
        ...member,
        rank: index + 1
      }));
    
    res.json({
      success: true,
      data: topPlayers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch top players'
    });
  }
});

// Get member statistics (must come before /:id route)
router.get('/stats/overview', (req, res) => {
  try {
    const stats = {
      totalMembers: members.length,
      activeMembers: members.filter(m => m.games > 0).length,
      juniorMembers: members.filter(m => m.category === 'junior').length,
      titledPlayers: members.filter(m => m.category === 'titled').length,
      averageRating: Math.round(members.reduce((sum, m) => sum + m.rating, 0) / members.length),
      totalGames: members.reduce((sum, m) => sum + m.games, 0)
    };
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch member statistics'
    });
  }
});

// Get recent achievements (must come before /:id route)
router.get('/achievements/recent', (req, res) => {
  try {
    const achievements = [
      {
        id: 1,
        title: 'National Championship Victory',
        description: 'Won the 2024 National Chess Championship with a perfect score',
        member: 'Sarah Chen',
        date: '2024-02-15'
      },
      {
        id: 2,
        title: 'Youth Tournament Champion',
        description: 'First place in the Under-18 Regional Championship',
        member: 'Sophie Brown',
        date: '2024-02-08'
      },
      {
        id: 3,
        title: 'Rating Milestone',
        description: 'Reached 2300 rating for the first time',
        member: 'Alex Johnson',
        date: '2024-01-28'
      },
      {
        id: 4,
        title: 'Blitz Tournament Winner',
        description: 'Won the monthly blitz tournament with 9/10 points',
        member: 'James Wilson',
        date: '2024-01-20'
      }
    ];
    
    res.json({
      success: true,
      data: achievements
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch recent achievements'
    });
  }
});

// Get member by ID
router.get('/:id', (req, res) => {
  try {
    const member = members.find(m => m.id === parseInt(req.params.id));
    
    if (!member) {
      return res.status(404).json({
        success: false,
        error: 'Member not found'
      });
    }
    
    res.json({
      success: true,
      data: member
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch member'
    });
  }
});

// Add new member
router.post('/', (req, res) => {
  try {
    const { name, title, location, rating, category } = req.body;
    
    if (!name || !title || !location) {
      return res.status(400).json({
        success: false,
        error: 'Name, title, and location are required'
      });
    }
    
    const newMember = {
      id: members.length + 1,
      name,
      title,
      location,
      rating: rating || 1200,
      games: 0,
      winRate: 0,
      tournamentsWon: 0,
      memberSince: new Date().getFullYear().toString(),
      achievements: [],
      category: category || 'senior'
    };
    
    members.push(newMember);
    
    res.status(201).json({
      success: true,
      message: 'Member added successfully',
      data: newMember
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to add member'
    });
  }
});

// Update member rating
router.patch('/:id/rating', (req, res) => {
  try {
    const { rating } = req.body;
    const member = members.find(m => m.id === parseInt(req.params.id));
    
    if (!member) {
      return res.status(404).json({
        success: false,
        error: 'Member not found'
      });
    }
    
    member.rating = rating;
    
    res.json({
      success: true,
      message: 'Rating updated successfully',
      data: member
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update rating'
    });
  }
});

module.exports = router; 