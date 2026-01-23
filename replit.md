# AegisWire Landing Page

## Overview

AegisWire is a landing page for a next-generation secure transport protocol product. The application is a lead generation site that collects email addresses from interested users before product launch. It features a modern, tech-focused design with animated elements and a dark theme optimized for a cybersecurity/cryptography product.

## User Preferences

- Framework: Pure Next.js 16+ with App Router (required)
- No Vite/React standalone - must use Next.js
- GitHub integration for automatic code syncing
- Future: AWS Amplify CI/CD deployment

## System Architecture

### Frontend Architecture

- **Framework**: Next.js 16+ with App Router
- **Styling**: Tailwind CSS with custom dark cybersecurity theme
- **Fonts**: Chakra Petch (display) and Inter (body)
- **Design**: Dark mode by default with blue/cyan accents, inverted logo for visibility

### Backend Architecture

- **Runtime**: Next.js API Routes (App Router in `app/api/`)
- **Server Entry**: `server/index.ts` wrapper that spawns Next.js process
- **Port**: Runs on port 5000

### Data Storage

- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-kit for migrations
- **Schema Location**: `lib/db.ts`

**Schema**:
- `leads` table: id (serial), email (text), createdAt (timestamp)

### API Structure

- `POST /api/leads` - Creates a new lead with email validation
  - Request: `{ email: string }`
  - Response: Created lead object or validation error

## Key Files

- `app/page.tsx` - Main landing page with hero, features, email signup
- `app/layout.tsx` - Root layout with fonts and metadata
- `app/globals.css` - Global styles and Tailwind config
- `app/api/leads/route.ts` - Email signup API endpoint
- `lib/db.ts` - Database schema and connection
- `lib/github.ts` - GitHub integration utilities
- `server/index.ts` - Server wrapper for Next.js
- `public/logo.webp` - AegisWire logo (inverted for dark backgrounds)

## External Integrations

### GitHub
- Connection established for code syncing
- Uses @octokit/rest for API access
- Configured for future CI/CD with AWS Amplify

### Database
- PostgreSQL via DATABASE_URL environment variable
