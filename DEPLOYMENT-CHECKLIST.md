# 🚀 Deployment Checklist for pawnupsolutions.com

## ✅ Completed Steps
- [x] Code prepared and tested locally
- [x] Backend API working (tested endpoints)
- [x] Frontend build successful
- [x] Code pushed to GitHub
- [x] Deployment configuration files created

## 🔄 Next Steps (Follow in Order)

### Step 1: Deploy Backend to Railway
1. **Go to [Railway.app](https://railway.app)**
2. **Sign in with GitHub**
3. **Create New Project** → "Deploy from GitHub repo"
4. **Select your repository** → Choose `backend` folder
5. **Add Environment Variables:**
   ```
   NODE_ENV=production
   PORT=3000
   JWT_SECRET=your-super-secret-jwt-key-here
   CORS_ORIGIN=https://pawnupsolutions.com
   ```
6. **Deploy** → Note the Railway URL (e.g., `https://your-app.railway.app`)

### Step 2: Deploy Frontend to Vercel
1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign in with GitHub**
3. **New Project** → Import your repository
4. **Configure:**
   - Root Directory: `frontend`
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Add Environment Variable:**
   ```
   VITE_API_URL=https://your-railway-app.railway.app
   ```
6. **Deploy** → Get your Vercel URL

### Step 3: Connect Your Domain
1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add `pawnupsolutions.com`
   - Add `www.pawnupsolutions.com`
2. **Update DNS Records** (at your domain registrar):
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Step 4: Update Backend CORS
1. **In Railway Dashboard:**
   - Update `CORS_ORIGIN` to: `https://pawnupsolutions.com`
2. **Redeploy** (automatic when env vars change)

### Step 5: Test Your Live Site
1. **Visit:** https://pawnupsolutions.com
2. **Test API:** https://pawnupsolutions.com/health
3. **Test Login:** Use demo accounts from README.md

## 🎯 Expected Timeline
- **Railway Deployment:** 5-10 minutes
- **Vercel Deployment:** 3-5 minutes
- **DNS Propagation:** Up to 48 hours (usually much faster)
- **Total Time:** 15-30 minutes

## 🆘 If You Get Stuck
1. **Check the full DEPLOYMENT.md guide**
2. **Verify environment variables are set correctly**
3. **Check Railway and Vercel logs for errors**
4. **Test API endpoints directly**

## 🎉 Success Indicators
- ✅ Frontend loads at pawnupsolutions.com
- ✅ API responds at /health endpoint
- ✅ Login/Register forms work
- ✅ Events and members pages load data
- ✅ No CORS errors in browser console

**Your chess club website will be live! ♔** 