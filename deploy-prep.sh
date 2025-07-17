#!/bin/bash

echo "♔ PawnUp Chess Club - Deployment Preparation Script"
echo "=================================================="

# Check if we're in the right directory
if [ ! -d "frontend" ] || [ ! -d "backend" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📦 Checking frontend dependencies..."
cd frontend
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
else
    echo "Frontend dependencies already installed"
fi

echo "🔨 Building frontend..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful"
else
    echo "❌ Frontend build failed"
    exit 1
fi

cd ../backend
echo "📦 Checking backend dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
else
    echo "Backend dependencies already installed"
fi

echo "🧪 Testing backend..."
npm test
if [ $? -eq 0 ]; then
    echo "✅ Backend tests passed"
else
    echo "⚠️  Backend tests failed (continuing anyway)"
fi

cd ..
echo ""
echo "🎉 Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Push your code to GitHub:"
echo "   git add ."
echo "   git commit -m 'Prepare for deployment'"
echo "   git push origin main"
echo ""
echo "2. Follow the DEPLOYMENT.md guide to deploy to Vercel + Railway"
echo ""
echo "3. Connect your domain pawnupsolutions.com"
echo ""
echo "Good luck! ♔" 