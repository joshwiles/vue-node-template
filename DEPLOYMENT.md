# 🚀 Deployment Guide: PawnUp Chess Club to pawnupsolutions.com

This guide will walk you through deploying your chess club website to your domain `pawnupsolutions.com` using Vercel (frontend) and Railway (backend).

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Domain Control** - Access to manage DNS for `pawnupsolutions.com`
3. **Vercel Account** - Free account at [vercel.com](https://vercel.com)
4. **Railway Account** - Free account at [railway.app](https://railway.app)

## 🎯 Step-by-Step Deployment

### Step 1: Prepare Your Repository

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Ensure your repository structure:**
   ```
   ProjectTonsberg/
   ├── frontend/          # Vue.js app
   ├── backend/           # Express.js API
   └── README.md
   ```

### Step 2: Deploy Backend to Railway

1. **Go to [Railway.app](https://railway.app) and sign in with GitHub**

2. **Create a new project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select the `backend` folder as the source

3. **Configure environment variables:**
   - Go to your project settings
   - Add these environment variables:
   ```
   NODE_ENV=production
   PORT=3000
   JWT_SECRET=your-super-secret-jwt-key-here
   CORS_ORIGIN=https://pawnupsolutions.com
   ```

4. **Deploy:**
   - Railway will automatically build and deploy your backend
   - Note the generated URL (e.g., `https://your-app-name.railway.app`)

### Step 3: Deploy Frontend to Vercel

1. **Go to [Vercel.com](https://vercel.com) and sign in with GitHub**

2. **Import your repository:**
   - Click "New Project"
   - Import your GitHub repository
   - Set the root directory to `frontend`
   - Framework preset: `Vite`

3. **Configure environment variables:**
   - Add this environment variable:
   ```
   VITE_API_URL=https://your-railway-app-url.railway.app
   ```
   (Replace with your actual Railway URL)

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your frontend
   - You'll get a URL like `https://your-project.vercel.app`

### Step 4: Connect Your Domain

#### Option A: Use Vercel's Domain Management (Recommended)

1. **In Vercel dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add `pawnupsolutions.com`
   - Add `www.pawnupsolutions.com`

2. **Update your domain's DNS:**
   - Go to your domain registrar (where you bought pawnupsolutions.com)
   - Update DNS records as instructed by Vercel:
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

#### Option B: Manual DNS Configuration

1. **Point your domain to Vercel:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   
   Type: CNAME
   Name: www
   Value: your-vercel-project.vercel.app
   ```

### Step 5: Update API Configuration

1. **Update CORS in your backend:**
   - In Railway, update the `CORS_ORIGIN` environment variable:
   ```
   CORS_ORIGIN=https://pawnupsolutions.com
   ```

2. **Redeploy backend:**
   - Railway will automatically redeploy when you change environment variables

### Step 6: Test Your Deployment

1. **Test the frontend:** Visit `https://pawnupsolutions.com`
2. **Test the API:** Visit `https://pawnupsolutions.com/api/health`
3. **Test authentication:** Try logging in with demo accounts

## 🔧 Alternative Deployment Options

### Option 2: Netlify + Render
- **Frontend:** Deploy to Netlify (similar to Vercel)
- **Backend:** Deploy to Render (similar to Railway)
- **Pros:** Both have generous free tiers
- **Cons:** Slightly more complex setup

### Option 3: DigitalOcean App Platform
- **Full-stack:** Deploy both frontend and backend in one place
- **Pros:** Single platform, good performance
- **Cons:** Paid service (starts at $5/month)

### Option 4: AWS/GCP/Azure
- **Enterprise:** Full cloud infrastructure
- **Pros:** Maximum control and scalability
- **Cons:** Complex setup, requires cloud expertise

## 🛠️ Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Ensure `CORS_ORIGIN` in Railway matches your domain exactly
   - Check that the frontend is making requests to the correct backend URL

2. **Build Failures:**
   - Check that all dependencies are in `package.json`
   - Ensure Node.js version compatibility

3. **Domain Not Working:**
   - DNS changes can take up to 48 hours to propagate
   - Verify DNS records are correct
   - Check domain registrar settings

4. **API Not Responding:**
   - Check Railway logs for errors
   - Verify environment variables are set correctly
   - Ensure the backend is actually running

### Debug Commands:

```bash
# Check if backend is running
curl https://your-railway-app.railway.app/api/health

# Check frontend build
cd frontend && npm run build

# Test local development
cd backend && npm run dev
cd frontend && npm run dev
```

## 📊 Monitoring & Maintenance

### Free Monitoring Tools:
- **Vercel Analytics:** Built-in performance monitoring
- **Railway Logs:** Real-time application logs
- **Uptime Robot:** Free uptime monitoring

### Regular Maintenance:
- Keep dependencies updated
- Monitor error logs
- Backup your database (when you add one)
- Review security settings

## 🎉 Success!

Once deployed, your chess club website will be live at:
- **Main site:** https://pawnupsolutions.com
- **API:** https://your-railway-app.railway.app

Your users can now:
- Browse the chess club website
- Register for events
- Book lessons
- Join as members
- Access member-only content

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Vercel and Railway documentation
3. Check your application logs
4. Verify all environment variables are set correctly

Happy deploying! ♔ 