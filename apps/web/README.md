# Web App

A Next.js frontend application with Tailwind CSS and type-safe API integration.

## Overview

The frontend for the monorepo built with Next.js and Tailwind CSS. It uses Hono's RPC client for type-safe API calls.

## Development

### Setup

1. Install dependencies:
   ```sh
   bun install
   ```

2. Start development server:
   ```sh
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

## API Integration

### Type-Safe Client

```typescript
// lib/client.ts
import { AppType } from "@repo/api-contract";
import { hc } from "hono/client";

export const client = hc<AppType>(
   process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
);
```

### Usage

```typescript
// In a React component
import { api } from '@/lib/api';

const response = await api.index.$get();
const data = await response.text(); // Fully typed
```

## Styling

Uses Tailwind CSS for styling. Configuration in `src/app/globals.css`.

## Environment Variables

Create `.env` for local development:

```bash
# .env
NEXT_PUBLIC_API_URL=http://localhost:8000
```