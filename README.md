# Anime_Odyssey_Hub

A personal project to create an anime tracking hub using Node.js, MongoDB, and React. This application allows users to register, log in, browse an anime catalog, and track their watched activities.

## Project Status
- **Sprints 1-3 (Backend)**: Completed
  - Set up Node.js server with Express and MongoDB Atlas (M0 tier).
  - Implemented API endpoints: `/api/auth/register`, `/api/auth/login`, `/api/anime`, `/api/user`, `/api/user/activity`, `/api/anime/search`.
  - Seeded database with `anime_data.json` (10 entries).
- **Sprint 4 (Frontend)**: In Progress
  - Initialized Vite + React frontend.
  - Implemented `ActivityLog` component with `/api/user/activity` integration.
  - Planned: Develop `Home`, `Navbar`, and `AnimeList` components.
- **Sprint 5 (Testing & Deployment)**: Upcoming
  - Unit and integration testing with Jest and Supertest.
  - Deployment to Vercel.

## Folder Structure
```Text
Anime_Odyssey_Hub/
├── .env                # Sensitive config (e.g., MONGODB_URI, JWT_SECRET)
├── .gitignore          # Excludes .env, node_modules
├── README.md           # Project overview and setup instructions
├── package.json        # Node.js project config (backend)
├── /server/            # Backend source code
│   ├── /src/
│   │   ├── /config/
│   │   │   └── db.js   # MongoDB connection setup
│   │   ├── /models/
│   │   │   ├── anime.js   # Anime schema
│   │   │   ├── user.js    # User schema
│   │   │   └── userActivity.js  # User activity schema
│   │   ├── /routes/
│   │   │   ├── animeRoutes.js  # Anime API endpoints
│   │   │   ├── authRoutes.js   # Auth API endpoints
│   │   │   └── userRoutes.js   # User/profile API endpoints
│   │   ├── /controllers/
│   │   │   ├── animeController.js
│   │   │   ├── authController.js
│   │   │   └── userController.js
│   │   ├── /middleware/
│   │   │   └── auth.js    # JWT authentication middleware
│   │   ├── app.js         # Main Express application
│   │   └── server.js      # Entry point to start the server
│   ├── package.json      # Backend dependencies
├── /client/            # React frontend (Vite-based)
│   ├── /src/
│   │   ├── /components/  # Reusable React components (e.g., Navbar, ActivityCard)
│   │   ├── /pages/       # Page components (e.g., Home, ActivityLog, Profile)
│   │   │   ├── Home.jsx
│   │   │   ├── ActivityLog.jsx
│   │   │   └── Profile.jsx
│   │   ├── /styles/      # CSS files (e.g., main.css)
│   │   ├── App.jsx       # Main React app
│   │   ├── main.jsx      # React entry point
│   │   └── vite.config.js # Vite configuration with proxy
│   ├── package.json      # Frontend dependencies (e.g., axios, react-router-dom)
│   └── public/
│       └── index.html    # React root HTML
├── /docs/              # Documentation and notes
│   └── project.md      # Updated project notes
├── /tests/             # Unit tests (optional, post-MVP)
│   └── example.test.js
└── /scripts/           # Utility scripts
└── importData.js   # Script to import anime_data.json to MongoDB
```
## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AegisX-dev/Anime_Odyssey_Hub.git
   cd Anime_Odyssey_Hub
   ```
2. **Install Backend Dependencies**:
```bash
cd server
npm install
```
3. **Configure Environment**:
- Create a .env file in the root directory with:
```Text
MONGODB_URI=your_mongodb_atlas_uri
PORT=5000
JWT_SECRET=your_secret_key
```
- Add .env to .gitignore to avoid committing sensitive data.
4. **Import Data**:
- Run the import script to seed the database:
```bash
node scripts/importData.js
```
Run the Backend Server:
```bash
cd server
npm run dev
```
- Access the API at http://localhost:5000.
5. **Install Frontend Dependencies**:
```bash
cd ../client
npm install
```
6. **Run the Frontend**:
```bash
cd client
npm run dev
```
- Access the app at http://localhost:5173.
## Features
- **User Authentication**: Register and log in with JWT-based authentication.
- **Anime Catalog**: Browse and search a catalog of 10 anime entries.
- **Activity Tracking**: Log and view watched anime activities via the /activity page.
- **API Endpoints**
- POST /api/auth/register: Create a new user.
- POST /api/auth/login: Authenticate and get a JWT token.
- GET /api/anime: Retrieve paginated anime list.
- GET /api/user: Get authenticated user profile.
- POST /api/user/activity: Log user activity.
- GET /api/user/activity: Retrieve user activity history.
- GET /api/anime/search: Search anime by title or genre.
## Future Plans
- Complete React frontend components (Home, Navbar, AnimeList).
- Add pagination and search UI.
- Implement error handling pages.
- Expand anime_data.json with more entries.
- Deploy to Vercel after Sprint 5 testing.
## Contributors
Dev Sharma (AegisX-dev)
## License
This project is open-source under the MIT License (see LICENSE file for details).

## Acknowledgments
- Assisted by Grok 3 (xAI) for development guidance.
- MongoDB Atlas and Vercel for free-tier hosting and deployment.