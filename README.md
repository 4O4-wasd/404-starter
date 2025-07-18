# Turborepo Starter

A modern full-stack monorepo template featuring Next.js frontend with Tailwind CSS, Hono API backend with Vite bundling, and automated deployment to Vercel and Cloudflare Workers.

This Turborepo starter is maintained by 4O4.

## Quick Start

```sh
git clone https://github.com/4O4-wasd/404-starter.git
```

> **Recommended:** Use [Bun](https://bun.sh/) for faster package management and builds. All commands below work with both `bun` and `npm`.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `web`: [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `api`: [Hono](https://hono.dev/) app built with [Vite](https://vitejs.dev/) for Cloudflare Workers
- `@repo/api-contract`: Type-safe API contract definitions and route handlers
- `@repo/eslint-config`: Shared ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: Shared TypeScript configurations used throughout the monorepo

### Development Tools

This Turborepo comes pre-configured with:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for fast development and optimized builds
- [Hono Client](https://hono.dev/docs/guides/rpc) for type-safe API calls from frontend to backend

## Deployment

### Vercel Deployment (Frontend)

The Next.js web app is configured for easy deployment to Vercel with a pre-configured `vercel.json` file.

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Turborepo structure and deploy the `web` app
3. The deployment will work out of the box with no additional configuration needed

### Cloudflare Workers Deployment (API)

The Hono API is configured for automatic deployment to Cloudflare Workers via GitHub Actions.

#### Required GitHub Secrets

Set up the following secrets in your GitHub repository:

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Workers deployment permissions
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
- `WRANGLER_JSONC`: Your wrangler configuration in JSON format

#### Setting up Cloudflare Secrets

1. **Get your Cloudflare API Token:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Create a custom token with **Edit Cloudflare Workers** template
   - Select the menu button at the end of the account row
   - Add the token to GitHub secrets as `CLOUDFLARE_API_TOKEN`

2. **Get your Account ID:**
   - Go to [Cloudflare dashboard](https://dash.cloudflare.com).
   - From the **Accounts** page, locate your account
   - Select the menu button at the end of the account row.
   - Select **Copy account ID**
   - Add to GitHub secrets as `CLOUDFLARE_ACCOUNT_ID`

3. **Configure Wrangler:**
   - Copy `wrangler.jsonc` from `api`
   - Add your wrangler configuration as `WRANGLER_JSONC`

The GitHub Actions workflow will automatically deploy your Hono API to Cloudflare Workers on every push to the main branch.

## Development

Install dependencies:

```sh
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

Start development servers:

```sh
# Using Bun
bun dev

# Or using npm
npm run dev
```

Generate Cloudflare types:

```sh
# Using Bun
bun api:typegen

# Or using npm
npm run api:typegen
```

Build all apps:

```sh
# Using Bun
bun build

# Or using npm
npm run build
```

Lint all packages:

```sh
# Using Bun
bun lint

# Or using npm
npm run lint
```

## Project Structure

```
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── @repo/api-contract/
│   ├── @repo/eslint-config/
│   └── @repo/typescript-config/
├── .github/
│   └── workflows/    # GitHub Actions for deploying the api worker
└── turbo.json        # Turborepo configuration
```

## Type-Safe API Communication

This template uses a sophisticated type-safe API pattern:

- `@repo/api-contract` defines all API routes and handlers, exporting an `AppType` that contains the complete API contract
- `api` imports the default export from `@repo/api-contract` to serve the Cloudflare Workers application
- `web` uses `hono/client` with the `AppType` imported from `@repo/api-contract` to make fully type-safe API calls

## Useful Links

Learn more about the technologies used:

**Turborepo:**

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

**Deployment:**

- [Vercel Documentation](https://vercel.com/docs)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions](https://docs.github.com/en/actions)

**Frameworks & Tools:**

- [Next.js Documentation](https://nextjs.org/docs)
- [Hono Documentation](https://hono.dev/)
- [Hono RPC Client](https://hono.dev/docs/guides/rpc)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bun Documentation](https://bun.sh/docs)
