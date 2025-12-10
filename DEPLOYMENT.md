# MairaAndShaheer - Deployment Guide

## Project Structure
- **docs/** - Frontend React application
- **backend/** - ASP.NET Core Web API
- **database/** - Entity Framework Core models and migrations

## Environment Variables

### Backend (.NET)
Set these environment variables or use User Secrets in production:

```bash
ConnectionStrings__DefaultConnection="Host=your-host;Port=5432;Database=your-db;Username=your-user;Password=your-password"
```

For local development, the connection string is in `backend/appsettings.Development.json` (gitignored).

### Frontend (Vite/React)
Create `.env.production` in the `docs` folder:

```bash
VITE_API_URL=https://your-backend-api-url.com
```

For local development, use `docs/.env.development` (already configured for localhost:5025).

## Deployment Steps

### Frontend (GitHub Pages)
1. Update `docs/.env.production` with your production API URL
2. Build: `cd docs && npm run build`
3. Commit and push the built files in `docs/`
4. Enable GitHub Pages in repository settings (serve from `docs` folder)

### Backend (e.g., Azure, Railway, etc.)
1. Set environment variable `ConnectionStrings__DefaultConnection` with your database connection string
2. Deploy the `backend` folder
3. Ensure CORS allows your frontend domain (update `Program.cs` if needed)

### Database
Connection string format:
```
Host=your-host;Port=5432;Database=postgres;Username=your-user;Password=your-password
```

Run migrations on first deployment:
```bash
cd database
dotnet ef database update
```

## Local Development

### Frontend
```bash
cd docs
npm install
npm run dev
# Runs on http://localhost:5173
```

### Backend
```bash
cd backend
dotnet run
# Runs on http://localhost:5025
```

## Security Notes
- Never commit `appsettings.Development.json` files (they're gitignored)
- Use environment variables or User Secrets in production
- Update CORS policy in `backend/Program.cs` for production domains
