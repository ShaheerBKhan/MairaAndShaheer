# Complete Deployment Guide - Render.com + GitHub Pages

## Step 1: Deploy Backend on Render.com

1. **Go to [render.com](https://render.com)** and sign in/create account
2. **Click "New +" → "Web Service"**
3. **Connect GitHub Repository**:
   - Click "Connect GitHub"
   - Select repository: `ShaheerBKhan/MairaAndShaheer`
   - Click "Connect"
4. **Configure Service**:
   - **Name**: `mairaandshaheer-backend` (or your preferred name)
   - **Region**: Choose closest to you (e.g., Oregon USA)
   - **Branch**: `main`
   - **Root Directory**: Leave blank (repository root)
   - **Dockerfile Path**: `backend/Dockerfile`
   - **Runtime**: Docker
   - **Instance Type**: Free (or your preference)
5. **Add Environment Variable**:
   - Click "Advanced" or scroll to "Environment Variables"
   - Click "Add Environment Variable"
   - **Key**: `ConnectionStrings__DefaultConnection`
   - **Value**: `Host=aws-1-us-east-1.pooler.supabase.com;Port=5432;Database=postgres;Username=postgres.kiqjulnouryrndxojqdh;Password=ShaheerBKhan`
6. **Click "Create Web Service"**
7. **Wait for deployment** (takes 3-5 minutes)
8. **Copy your backend URL** (shown at top, e.g., `https://mairaandshaheer-backend.onrender.com`)

## Step 2: Update Frontend Configuration

1. **Open** `source-docs/.env.production`
2. **Update** with your Render backend URL:
   ```
   VITE_API_URL=https://your-backend-name.onrender.com
   ```
   (Replace `your-backend-name` with your actual Render service name)

## Step 3: Build and Deploy Frontend

1. **Navigate to source-docs**:
   ```bash
   cd source-docs
   ```
2. **Install dependencies** (if not already):
   ```bash
   npm install
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```
   (This creates optimized files in the `docs` folder)
4. **Commit and push**:
   ```bash
   cd ..
   git add .
   git commit -m "Deploy frontend with production API URL"
   git push
   ```

## Step 4: Enable GitHub Pages

1. **Go to your GitHub repository**: `https://github.com/ShaheerBKhan/MairaAndShaheer`
2. **Click Settings** (top right)
3. **Click Pages** (left sidebar)
4. **Under "Build and deployment"**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
5. **Click Save**
6. **Wait 1-2 minutes** for deployment
7. **Your site will be live at**: `https://shaheerbkhan.github.io/MairaAndShaheer/`

## Step 5: Test Everything

1. **Test Backend API**:
   - Visit: `https://your-backend-name.onrender.com/swagger`
   - Try the Photos endpoint with `year=2025&month=11`
2. **Test Frontend**:
   - Visit: `https://shaheerbkhan.github.io/MairaAndShaheer/`
   - Navigate to November 2025
   - Photos should load from the backend API

## Quick Reference

**Backend URL**: `https://your-backend-name.onrender.com`
**Frontend URL**: `https://shaheerbkhan.github.io/MairaAndShaheer/`
**API Endpoint**: `https://your-backend-name.onrender.com/api/photos?year=2025&month=11`

## Troubleshooting

**Frontend shows no photos**:
- Check browser console (F12) for errors
- Verify `VITE_API_URL` in `.env.production` is correct
- Rebuild frontend: `cd source-docs && npm run build`

**Backend errors on Render**:
- Check Render logs in dashboard
- Verify environment variable is set correctly
- Ensure connection string has no typos

**CORS errors**:
- Backend should allow `https://shaheerbkhan.github.io`
- Already configured in `Program.cs`

## Notes

- **Render free tier**: Backend may sleep after 15 min of inactivity (first request takes 30-60 seconds to wake up)
- **GitHub Pages**: Changes take 1-2 minutes to deploy
- **Database**: Same Supabase database used for both development and production

