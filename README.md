# ♔ PawnUp Chess Club Website Template

A modern, responsive website template designed specifically for chess clubs. Built with Vue.js 3, Tailwind CSS, and Node.js/Express.

## 🚀 Features

### Frontend (Vue.js 3)
- **Modern Design**: Clean, professional design with chess-themed color scheme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Dynamic event registration, member profiles, lesson booking
- **Vue Router**: Single-page application with smooth navigation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

### Backend (Node.js/Express)
- **RESTful API**: Complete API for all chess club functionality
- **Authentication System**: JWT-based authentication with role-based access control
- **Event Management**: Tournament and workshop registration system with member-only events
- **Member Management**: Player profiles, ratings, and achievements
- **Lesson Booking**: Coach profiles and lesson scheduling
- **Contact System**: Contact form and inquiry management
- **User Management**: Admin panel for user role and status management

## 📋 Pages & Features

### 🏠 Home Page
- Hero section with call-to-action
- Club features and benefits
- Upcoming events preview
- Membership call-to-action

### ℹ️ About Page
- Club history and mission
- Leadership team profiles
- Club statistics and achievements
- Timeline of milestones

### 📅 Events Page
- Tournament and workshop listings
- Event registration system
- Event calendar view
- Tournament results
- Category filtering

### 👥 Members Page
- Member profiles and statistics
- Top rated players leaderboard
- Recent achievements
- Member categories (Titled, Junior, Senior)
- Interactive member modals

### 🎓 Lessons Page
- Learning programs (Beginner, Intermediate, Advanced)
- Coach profiles and credentials
- Lesson scheduling
- Student testimonials
- Booking system

### 📞 Contact Page
- Contact information and hours
- Contact form with validation
- Location and directions
- FAQ section
- Social media links

### 🔐 Authentication System
- **Login/Register**: Secure user authentication with JWT tokens
- **Role-Based Access**: Member and Admin roles with different permissions
- **Member Dashboard**: Profile management and event registration
- **Admin Dashboard**: User management, event creation, and content editing
- **Member-Only Events**: Exclusive events for registered members
- **Profile Management**: Update personal information and chess rating

## 🛠️ Technology Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Pinia** - State management for Vue.js
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - Beautiful hand-crafted SVG icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing and verification
- **express-validator** - Input validation and sanitization
- **express-rate-limit** - Rate limiting for security
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd chess-club-template
```

### 2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

### 4. Environment Setup
Create a `.env` file in the backend directory:
```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=your-secret-key-here
```

### 5. Start Development Servers

#### Frontend (Vue.js)
```bash
cd frontend
npm run dev
```
Frontend will be available at: http://localhost:5173

#### Backend (Express)
```bash
cd backend
npm run dev
```
Backend API will be available at: http://localhost:3000

## 🎨 Customization

### Colors & Branding
The template uses a chess-themed color palette defined in `frontend/tailwind.config.js`:

```javascript
colors: {
  'chess-dark': '#2C3E50',
  'chess-light': '#ECF0F1',
  'chess-gold': '#F39C12',
  'chess-silver': '#BDC3C7',
  'chess-brown': '#8B4513',
  'chess-cream': '#FDF5E6'
}
```

### Club Information
Update club-specific information in:
- `frontend/src/views/About.vue` - Club history and leadership
- `frontend/src/views/Contact.vue` - Contact details and hours
- `backend/routes/index.js` - Club statistics and information

### Content Management
All content is easily customizable through the Vue components:
- Events data in `frontend/src/views/Events.vue`
- Member profiles in `frontend/src/views/Members.vue`
- Lesson programs in `frontend/src/views/Lessons.vue`

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/logout` - User logout
- `GET /api/auth/users` - Get all users (Admin only)
- `PATCH /api/auth/users/:id` - Update user role/status (Admin only)

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get specific event
- `POST /api/events/:id/register` - Register for event (Authenticated)
- `POST /api/events/:id/unregister` - Unregister from event (Authenticated)
- `POST /api/events` - Create new event (Admin only)
- `PUT /api/events/:id` - Update event (Admin only)
- `DELETE /api/events/:id` - Delete event (Admin only)
- `GET /api/events/results/tournaments` - Get tournament results

### Members
- `GET /api/members` - Get all members
- `GET /api/members/:id` - Get specific member
- `GET /api/members/top/players` - Get top rated players
- `GET /api/members/stats/overview` - Get member statistics
- `POST /api/members` - Add new member

### Lessons
- `GET /api/lessons/coaches` - Get all coaches
- `GET /api/lessons/programs` - Get lesson programs
- `GET /api/lessons/schedule` - Get lesson schedule
- `POST /api/lessons/book` - Book a lesson

### Contact
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/info` - Get contact information
- `GET /api/contact/faq` - Get FAQ
- `GET /api/contact/location` - Get location info

## 🧪 Demo Accounts

For testing purposes, the following demo accounts are available:

### Admin Account
- **Email**: admin@pawnup.com
- **Password**: password
- **Role**: Admin (full access to all features)

### Member Account
- **Email**: sarah.chen@pawnup.com
- **Password**: password
- **Role**: Member (can register for events, update profile)

## 🚀 Deployment
```bash
cd frontend
npm run build
```
The built files will be in `frontend/dist/` ready for deployment.

### Backend Deployment
```bash
cd backend
npm start
```
For production, consider using PM2 or similar process manager.

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- **Helmet.js** - Security headers
- **CORS** - Cross-origin protection
- **Input Validation** - Form validation on both frontend and backend
- **Error Handling** - Comprehensive error handling

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags
- Structured data markup ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact: info@pawnup.com

## 🎨 Design Credits

- Icons: Heroicons
- Fonts: Inter (Google Fonts)
- Color Palette: Custom chess-themed design

---

**♔ PawnUp Chess Club Template** - Building communities through the game of chess.
# ProjectTonsberg
