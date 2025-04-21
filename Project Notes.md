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
- **Dependencies**: Installed via `npm install` (see `package.json`)
- **Database**: Seeded with `anime_data.json` (10 entries) using `scripts/importData.js`
- **Server**: Running on `http://localhost:5000` with `npm run dev`

## Development Sprints
### Sprint 1: Workspace Setup (March 15 - March 22, 2025)
- Completed: Node.js, MongoDB Atlas, Sublime Text, project structure.
- Outcome: Backend environment ready.

### Sprint 2: Backend Development (March 23 - April 5, 2025)
- Tasks:
  - Implemented Express server (`src/server.js`, `src/app.js`).
  - Defined Mongoose models (`src/models/index.js`: Users, Anime, UserActivity).
  - Created routes (`src/routes/`): auth, anime, user.
  - Seeded `Anime` collection with `anime_data.json`.
- Outcome: Backend API functional.

### Sprint 3: API Testing (April 6 - April 21, 2025)
- **Objective**: Validate all API endpoints.
- **Tools**: Hoppscotch, MongoDB Atlas/Compass.
- **Test Results**:

#### Endpoints Tested
1. **POST /api/auth/register**
   - **Purpose**: Create a new user.
   - **Request**:
     - Method: POST
     - URL: `http://localhost:5000/api/auth/register`
     - Body: `{"username": "testuser", "email": "testuser@example.com", "password": "password123"}`
     - Headers: `Content-Type: application/json`
   - **Response**: `201 Created`
     - Body: `{"message": "User registered successfully", "user": {"_id": "<ObjectId>", "username": "testuser", "email": "testuser@example.com", "created_at": "<ISODate>"}}`
   - **Status**: Success

2. **POST /api/auth/login**
   - **Purpose**: Authenticate user and get JWT token.
   - **Request**:
     - Method: POST
     - URL: `http://localhost:5000/api/auth/login`
     - Body: `{"email": "testuser@example.com", "password": "password123"}`
     - Headers: `Content-Type: application/json`
   - **Response**: `200 OK`
     - Body: `{"token": "<JWT_TOKEN>", "user": {"_id": "<ObjectId>", "username": "testuser", "email": "testuser@example.com"}}`
   - **Status**: Success
   - **Note**: Token stored as `{{token}}` in Hoppscotch environment.

3. **GET /api/anime**
   - **Purpose**: Retrieve paginated anime list.
   - **Request**:
     - Method: GET
     - URL: `http://localhost:5000/api/anime?page=1&limit=5`
     - Headers: None
   - **Response**: `200 OK`
     - Body: `{"anime": [<5 anime objects>], "total": 10, "page": 1, "pages": 2}`
   - **Status**: Success

4. **GET /api/user**
   - **Purpose**: Get authenticated user profile.
   - **Request**:
     - Method: GET
     - URL: `http://localhost:5000/api/user`
     - Headers: `Authorization: Bearer {{token}}`
   - **Response**: `200 OK`
     - Body: `{"_id": "<ObjectId>", "username": "testuser", "email": "testuser@example.com", "created_at": "<ISODate>"}`
   - **Status**: Success

5. **POST /api/user/activity**
   - **Purpose**: Log user activity (e.g., watched anime).
   - **Request**:
     - Method: POST
     - URL: `http://localhost:5000/api/user/activity`
     - Body: `{"anime_id": "<ANIME_OBJECT_ID>", "activity_type": "watched"}`
     - Headers: `Content-Type: application/json`, `Authorization: Bearer {{token}}`
   - **Response**: `201 Created`
     - Body: `{"_id": "<ObjectId>", "user_id": "<USER_OBJECT_ID>", "anime_id": "<ANIME_OBJECT_ID>", "activity_type": "watched", "timestamp": "<ISODate>"}`
   - **Status**: Success

6. **GET /api/user/activity**
   - **Purpose**: Retrieve user activity history.
   - **Request**:
     - Method: GET
     - URL: `http://localhost:5000/api/user/activity`
     - Headers: `Authorization: Bearer {{token}}`
   - **Response**: `200 OK`
     - Body: `[{\"_id\": \"<ObjectId>\", \"user_id\": \"<USER_OBJECT_ID>\", \"anime_id\": \"<ANIME_OBJECT_ID>\", \"activity_type\": \"watched\", \"timestamp\": \"<ISODate>\"}`
   - **Status**: Success

7. **GET /api/anime/search**
   - **Purpose**: Search anime by title or genre.
   - **Request**:
     - Method: GET
     - URL: `http://localhost:5000/api/anime/search`
     - Query Params: `title=naruto` or `genre=action`
     - Headers: None
   - **Response**: `200 OK`
     - Body: `[...10 anime objects...]` (e.g., matches for "naruto" or "action")
   - **Edge Case**: `title=xyz`
     - Response: `200 OK`, Body: `[]`
   - **Status**: Success
   - **Note**: Returns all 10 anime for broad matches (e.g., "action"), empty array for non-matches.

#### Observations
- All endpoints return expected status codes (200, 201) and data structures.
- JWT authentication works for protected routes (`/api/user`, `/api/user/activity`).
- Search endpoint handles partial matches and non-matches correctly.
- MongoDB Atlas connection stable (5.0 connections, 66.94 KB data).

#### Issues Resolved
- Initial "Cannot GET /" (404) and "message port closed" errors due to server not running; resolved by starting `npm run dev`.
- No schema or route conflicts observed.

### Sprint 4: Frontend Planning (April 22 - May 5, 2025)
- **Objective**: Develop React frontend to consume API endpoints.
- **Tasks**:
  - Initialize React app with `create-react-app`.
  - Integrate Axios for API calls.
  - Build components: AnimeList, UserProfile, ActivityLog.
  - Connect to `/api/anime`, `/api/user`, `/api/user/activity`.
- **Dependencies**: `axios`, React Router (planned).

### Sprint 5: Unit and Integration Testing (May 6 - May 15, 2025)
- **Objective**: Ensure code reliability.
- **Tasks**:
  - Install Jest and Supertest for unit tests.
  - Test controllers and middleware.
  - Add `express-validator` for input validation.
  - Test edge cases (e.g., invalid `anime_id`, expired token).

### Additional Notes
- **MongoDB Verification**: Check `Users`, `Anime` (10 entries), and `UserActivity` collections in Atlas/Compass.
- **Environment**: `.env` file with `MONGODB_URI` and `PORT=5000` configured.
- **Team**: Solo project, assisted by Grok 3 (xAI).

## Future Improvements
- Add pagination UI in frontend.
- Implement error handling pages.
- Expand `anime_data.json` with more entries.