# Backend Template

A Node.js/Express server template for Vue.js projects.

## Features

- Express.js server with middleware setup
- CORS enabled for frontend communication
- Static file serving for Vue.js builds
- API route structure
- Error handling middleware
- Environment variable support
- Development and production scripts

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment file:
   ```bash
   cp .env.example .env
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build and start production server:
   ```bash
   npm run build
   npm start
   ```

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run build` - Build the frontend (if needed)
- `npm test` - Run tests (configure as needed)

## API Endpoints

### Health Check
- `GET /api/health` - Server status and timestamp

### Hello World
- `GET /api/hello` - Sample endpoint with query parameter support
  - Query params: `name` (optional)

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3000
NODE_ENV=development
```

## Project Structure

```
backend/
├── server.js          # Main server file
├── routes/            # API route modules
├── middleware/        # Custom middleware
├── controllers/       # Route controllers
├── models/           # Data models
├── utils/            # Utility functions
└── tests/            # Test files
```

## Adding New Routes

1. Create route files in `routes/` directory
2. Import and use in `server.js`
3. Follow RESTful conventions

## Deployment

This template is ready for deployment on:
- Heroku
- Vercel
- Railway
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## Contributing

1. Follow the existing code structure
2. Add tests for new features
3. Update documentation
4. Use conventional commits 