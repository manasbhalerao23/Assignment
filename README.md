# Assignment

This project is a modern web application built with [Next.js](https://nextjs.org) and TypeScript. It provides an AI-driven productivity dashboard with user authentication, lead and campaign management, and a customizable, theme-aware UI. The app is ready for deployment on Vercel, and leverages a PostgreSQL database via Drizzle ORM.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Deployment Instructions](#deployment-instructions)

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/manasbhalerao23/Assignment.git
   cd Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   Create a `.env.local` file based on `.env.example` and provide settings for:
   - `DATABASE_URL` (PostgreSQL connection string)
   - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` for Google OAuth
   - `BETTER_AUTH_URL` (your app URL for auth callbacks)

4. **Run database migrations**

   If using Drizzle ORM, run:
   ```bash
   npm run drizzle:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Documentation

### Authentication

- **POST `/api/auth/login`**  
  Login with email/password or via Google (OAuth).
- **POST `/api/auth/register`**  
  Register new users.
- **GET `/api/auth/session`**  
  Get current session details.
- **POST `/api/auth/logout`**  
  Logout the user.

### Leads

- **GET `/api/leads`**  
  Returns a paginated list of leads.
- **POST `/api/leads`**  
  Create a new lead.
- **GET `/api/leads/:id`**  
  Retrieve details for a single lead.
- **PUT `/api/leads/:id`**  
  Update a lead.
- **DELETE `/api/leads/:id`**  
  Delete a lead.

### Campaigns

- **GET `/api/campaigns`**  
  List all campaigns.
- **POST `/api/campaigns`**  
  Create a campaign.
- **GET `/api/campaigns/:id`**  
  Get a specific campaign.
- **PUT `/api/campaigns/:id`**  
  Update a campaign.
- **DELETE `/api/campaigns/:id`**  
  Delete a campaign.

**Note:** All protected endpoints require a valid session.

---

## Database Schema

The app uses PostgreSQL, managed through Drizzle ORM. Below is a summary of the main tables:

### `user`

| Column         | Type      | Constraints                  |
|----------------|-----------|------------------------------|
| id             | text      | PK                           |
| name           | text      | not null                     |
| email          | text      | not null, unique             |
| emailVerified  | boolean   | default: false, not null     |
| image          | text      |                              |
| createdAt      | timestamp | default: now()               |
| updatedAt      | timestamp | default: now()               |

### `account`

| Column      | Type   | Constraints                                 |
|-------------|--------|---------------------------------------------|
| id          | text   | PK                                          |
| accountId   | text   | not null                                    |
| providerId  | text   | not null                                    |
| userId      | text   | not null, FK to user(id), onDelete: cascade |
| accessToken | text   |                                             |
| refreshToken| text   |                                             |
| idToken     | text   |                                             |

*Additional tables for leads, campaigns, and sessions are defined similarly.*

---

## Deployment Instructions

The easiest way to deploy this Next.js app is via [Vercel](https://vercel.com/):

1. **Push your code to GitHub.**
2. **Connect your repository to Vercel:**  
   Go to [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), import your repo, and set up environment variables for production.
3. **Set up your PostgreSQL database**  
   Use a managed service (e.g., Supabase, Neon, Railway) and update `DATABASE_URL` on Vercel.
4. **Deploy!**  
   Vercel will handle the build and deployment automatically.

For more, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team/docs/overview)
- [Vercel Documentation](https://vercel.com/docs)