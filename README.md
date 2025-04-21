# Anime Odyssey Hub

A lightweight web app for anime fans to browse, search, and track anime content. Built with Node.js, Express, MongoDB, and React (frontend in progress). Currently in the MVP development phase with a functional backend.

## Project Status
- **Backend**: Complete (Sprints 1-3)
  - Functional APIs for anime catalog, user authentication, and activity tracking.
  - Tested with Hoppscotch and seeded with initial anime data.
- **Frontend**: Planned (Sprint 4, starting April 22, 2025)
  - React-based UI for browsing anime, user profiles, and activity logging.
- **Deployment**: Backend hosted on Vercel, database on MongoDB Atlas (M0 tier).

## Features
- **Anime Catalog**: Browse and search anime by title or genre (`GET /api/anime`, `GET /api/anime/search`).
- **User Profiles**: Register, login, and view profiles (`POST /api/auth/register`, `POST /api/auth/login`, `GET /api/user`).
- **Activity Tracking**: Log watched or favorited anime (`POST /api/user/activity`, `GET /api/user/activity`).

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/AegisX-dev/Anime_Odyssey_Hub.git
   cd Anime_Odyssey_Hub