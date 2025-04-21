# Project Notes: Anime Odyssey Hub

## Overview
The Anime Odyssey Hub is a web application designed to provide an anime catalog and user activity tracking. This document tracks project progress, including setup, development, and testing phases.

## Project Setup
- **Date**: March 15, 2025 - April 21, 2025
- **Environment**:
  - Node.js: v18.x
  - MongoDB: Atlas M0 Free Tier (v8.0.0, Mumbai region)
  - Editor: Sublime Text
  - Testing Tool: Hoppscotch
- **Dependencies**: Installed via `npm install` (see `server/package.json` and `client/package.json`)
- **Database**: Seeded with `anime_data.json` (10 entries) using `scripts/importData.js`
- **Server**: Running on `http://localhost:5000` with `npm run dev` (backend)
- **Frontend**: Running on `http://localhost:5173` with Vite + React

## Development Sprints
### Sprint 1: Workspace Setup (March 15 - March 22, 2025)
- Completed: Node.js, MongoDB Atlas, Sublime Text, project structure.
- Outcome: Backend environment ready.

### Sprint 2: Backend Development (March 23 - April 5, 2025)
- Tasks:
  - Implemented Express server (`server/src/server.js`, `server/src/app.js`).
  - Defined Mongoose models (`server/src/models/`): Users, Anime, UserActivity.
  - Created routes (`server/src/routes/`): auth, anime, user.
  - Seeded `Anime` collection with `anime_data.json`.
- Outcome: Backend API functional.

### Sprint 3: API Testing (April 6 - April 21, 2025)
- **Objective**: Validate all API endpoints.
- **Tools**: Hoppscotch, MongoDB Atlas/Compass.
- **Test Results**:

#### Endpoints Tested
1. **POST /api/auth/register**
   - **Purpose**: Create a new user.
   - **Request**: `{"username": "testuser", "email": "testuser@example.com", "password": "password123"}`
   - **Response**: `201 Created`, `{"message": "User registered successfully", "user": {...}}`
   - **Status**: Success

2. **POST /api/auth/login**
   - **Purpose**: Authenticate user and get JWT token.
   - **Request**: `{"email": "testuser@example.com", "password": "password123"}`
   - **Response**: `200 OK`, `{"token": "<JWT_TOKEN>", "user": {...}}`
   - **Status**: Success
   - **Note**: Token stored as `{{token}}` in Hoppscotch.

3. **GET /api/anime**
   - **Purpose**: Retrieve paginated anime list.
   - **Request**: `?page=1&limit=5`
   - **Response**: `200 OK`, `{"anime": [...], "total": 10, "page": 1, "pages": 2}`
   - **Status**: Success

4. **GET /api/user**
   - **Purpose**: Get authenticated user profile.
   - **Request**: `Authorization: Bearer {{token}}`
   - **Response**: `200 OK`, `{"_id": "<ObjectId>", "username": "testuser", "email": "testuser@example.com", "created_at": "<ISODate>"}`
   - **Status**: Success

5. **POST /api/user/activity**
   - **Purpose**: Log user activity.
   - **Request**: `{"anime_id": "<ANIME_OBJECT_ID>", "activity_type": "watched"}`
   - **Response**: `201 Created`, `{"_id": "<ObjectId>", "user_id": "...", "anime_id": "...", "activity_type": "watched", "timestamp": "<ISODate>"}`
   - **Status**: Success

6. **GET /api/user/activity**
   - **Purpose**: Retrieve user activity history.
   - **Request**: `Authorization: Bearer {{token}}`
   - **Response**: `200 OK`, `[...]`
   - **Status**: Success

7. **GET /api/anime/search**
   - **Purpose**: Search anime by title or genre.
   - **Request**: `?title=naruto` or `?genre=action`
   - **Response**: `200 OK`, `[...10 anime objects...]` or `[]` (e.g., for "xyz")
   - **Status**: Success

#### Observations
- All endpoints return expected status codes and data.
- JWT authentication works for protected routes.
- Search endpoint handles partial matches and non-matches.

#### Issues Resolved
- Fixed "Cannot GET /" and "message port closed" errors by ensuring server is running.
- No schema or route conflicts.

### Sprint 4: Frontend Development (April 22 - April 21, 2025)
- **Objective**: Develop React frontend with Vite to consume API endpoints.
- **Tasks**:
  - Initialized Vite + React frontend (`client/`).
  - Installed dependencies: `axios`, `react-router-dom`.
  - Implemented `ActivityLog` component with `/api/user/activity` integration.
  - Fixed rendering issue with nested `anime_id` objects (displaying `_id` and `title`).
- **Outcome**: `/activity` page functional, displaying user activity logs.
- **Next Steps**:
  - Build `Home`, `Navbar`, and `AnimeList` components.
  - Integrate search with `/api/anime`.

### Sprint 5: Unit and Integration Testing (May 6 - May 15, 2025)
- **Objective**: Ensure code reliability.
- **Tasks**:
  - Install Jest and Supertest for unit tests.
  - Test controllers and middleware.
  - Add `express-validator` for input validation.
  - Test edge cases (e.g., invalid `anime_id`, expired token).

### Additional Notes
- **MongoDB Verification**: Check `Users`, `Anime` (10 entries), and `UserActivity` collections in Atlas/Compass.
- **Environment**: `.env` with `MONGODB_URI`, `PORT=5000`, and `JWT_SECRET`.
- **Team**: Solo project, assisted by Grok 3 (xAI).
- **GitHub**: Updated repo at https://github.com/AegisX-dev/Anime_Odyssey_Hub with latest code and `docs/project.md`.

## Future Improvements
- Add pagination UI in frontend.
- Implement error handling pages.
- Expand `anime_data.json` with more entries.
- Deploy to Vercel post-Sprint 5.