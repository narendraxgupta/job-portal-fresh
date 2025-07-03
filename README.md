# Job Portal Project

This is a full-stack job portal application with a React frontend and a Node.js/Express backend.

## Project Structure

- `client/` — React frontend (Vite)
- `server/` — Node.js/Express backend (deployed as serverless on Vercel)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Setup

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd job-portal
   ```

2. **Install dependencies:**
   - For the client:
     ```sh
     cd client
     npm install
     ```
   - For the server:
     ```sh
     cd ../server
     npm install
     ```

3. **Environment Variables:**
   - Create `.env` files in both `client` and `server` directories as needed.
   - Add all required environment variables (see `.env.example` if available).

4. **Run locally:**
   - Client: `npm run dev` (from `client`)
   - Server: `npm start` (from `server`)

## Deployment

- The backend (`server/`) is configured for Vercel serverless deployment.
- Set the Vercel project root to `server/`.
- Add all required environment variables in the Vercel dashboard.

## License

MIT
