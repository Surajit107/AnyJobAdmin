# Docker Setup for AnyJob Admin

This document explains how to run the AnyJob Admin application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

## Quick Start

### Using Docker Compose (Recommended)

1. **Build and run the application:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

3. **Stop the application:**
   ```bash
   docker-compose down
   ```

### Using Docker directly

1. **Build the Docker image:**
   ```bash
   docker build -t anyjob-admin .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:80 anyjob-admin
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

## Docker Configuration

### Multi-stage Build
The Dockerfile uses a multi-stage build approach:
- **Stage 1 (Builder)**: Uses Node.js 18 Alpine to build the React application
- **Stage 2 (Production)**: Uses Nginx Alpine to serve the built application

### Nginx Configuration
The application includes a custom Nginx configuration (`nginx.conf`) that:
- Handles React Router client-side routing
- Enables Gzip compression
- Sets security headers
- Configures caching for static assets
- Provides a health check endpoint

### Environment Variables
The application can be configured using environment variables:
- `NODE_ENV`: Set to `production` for optimized builds

## Development vs Production

### Development
For development, you can run the application directly:
```bash
npm install
npm start
```

### Production
For production deployment, use Docker:
```bash
docker-compose up --build -d
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are properly listed in `package.json`
- Check that the Dockerfile is in the root directory
- Verify that `.dockerignore` is properly configured

### Runtime Issues
- Check container logs: `docker-compose logs`
- Verify port mapping: `docker ps`
- Ensure no other service is using port 3000

### Performance Optimization
- The multi-stage build reduces the final image size
- Static assets are cached for 1 year
- Gzip compression is enabled for better performance

## API Integration

If your application needs to connect to a backend API, uncomment the relevant sections in:
- `docker-compose.yml` (for network configuration)
- `nginx.conf` (for API proxy configuration)

## Health Check

The application includes a health check endpoint at `/health` that returns a simple "healthy" response.

## Security

The Nginx configuration includes several security headers:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy
- Content-Security-Policy 