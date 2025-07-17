# Vue.js + Node.js Template

A full-stack template with Vue.js frontend and Express.js backend, ready for rapid development and deployment.

## 🚀 Features

### Frontend (Vue.js)
- Vue 3 with Composition API
- Vite for fast development and building
- Modern CSS with base styles
- Component-based architecture
- Hot module replacement

### Backend (Node.js/Express)
- Express.js server with middleware setup
- CORS enabled for frontend communication
- Environment variable support
- Modular route structure
- Error handling middleware
- Security headers with Helmet
- Request logging with Morgan
- Production-ready configuration

## 📁 Project Structure

```
vue-node-project/
├── frontend/                 # Vue.js application
│   ├── src/
│   │   ├── components/      # Vue components
│   │   ├── assets/          # Static assets
│   │   └── main.js          # App entry point
│   ├── public/              # Public assets
│   └── package.json         # Frontend dependencies
├── backend/                  # Express.js server
│   ├── routes/              # API route modules
│   ├── middleware/          # Custom middleware
│   ├── controllers/         # Route controllers
│   ├── models/              # Data models
│   ├── utils/               # Utility functions
│   ├── tests/               # Test files
│   ├── server.js            # Main server file
│   └── package.json         # Backend dependencies
└── README.md                # This file
```

## 🛠️ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd vue-node-project
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

### Development

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
   Server will run on http://localhost:3000

2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on http://localhost:5173

### Production Build

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the production server:**
   ```bash
   cd backend
   npm start
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### API Endpoints

- `GET /api/health` - Server health check
- `GET /api/hello` - Hello world endpoint
- `POST /api/echo` - Echo POST data

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm run test:unit
```

## 📦 Available Scripts

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run build` - Build the application
- `npm test` - Run tests

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test:unit` - Run unit tests

## 🚀 Deployment

### Backend Deployment
The backend is ready for deployment on:
- Heroku
- Vercel
- Railway
- DigitalOcean App Platform
- AWS Elastic Beanstalk

### Frontend Deployment
The frontend can be deployed on:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- Request size limits
- Environment-based error messages
- Input validation (ready to implement)

## 📝 Adding Features

### New API Routes
1. Create route file in `backend/routes/`
2. Import in `backend/routes/index.js`
3. Follow RESTful conventions

### New Vue Components
1. Create component in `frontend/src/components/`
2. Import and use in your views
3. Follow Vue 3 Composition API patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the repository or contact the maintainers. 