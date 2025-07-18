# API App

A lightweight Hono API built with Vite for Cloudflare Workers.

## Overview

This API app serves the backend for the monorepo using the Hono framework. It imports the complete application from `@repo/api-contract` and deploys it to Cloudflare Workers.

## Development

### Setup

1. Install dependencies:

   ```sh
   bun install
   ```

2. Copy and configure Wrangler:

   ```sh
   cp wrangler.example.jsonc wrangler.jsonc
   ```

3. Generate Cloudflare types:

   ```sh
   bun typegen
   ```

4. Start development server:

   ```sh
   bun dev
   ```

   ### Setup

5. Open [http://localhost:8000](http://localhost:8000)

### Available Scripts

- `bun dev` - Start development server
- `bun run build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun run deploy` - Deploy to Cloudflare Workers
- `bun cf-typegen` - Generate Cloudflare types

## Deployment

### Automatic Deployment

The API is automatically deployed via GitHub Actions when changes are pushed to main.

- #### Required GitHub Secrets
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
   - `WRANGLER_JSONC`: Your wrangler configuration

### Manual Deployment

```sh
bun run deploy
```

## Configuration

Configure `wrangler.jsonc` with your Cloudflare Workers settings:

```json
{
   "name": "your-api-name",
   "main": "src/index.ts",
   "compatibility_date": "2025-07-12"
}
```
