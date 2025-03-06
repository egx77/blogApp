# Blog Application (MERN Stack)

## Overview
This is a full-stack blog application built with the MERN stack. It features user authentication, CRUD operations for blog posts, and (optionally) a commenting system.

## Backend API (server)
- **Technologies:** Node.js, Express, MongoDB, Mongoose
- **Features:**
  - User registration & login (JWT-based authentication)
  - CRUD operations for blog posts (only authenticated users can create, update, or delete their posts)
  - Admin can delete any posts
- **Setup:**
  1. Navigate to the `server` folder.
  2. Create a `.env` file with the following:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```
  3. Run `npm install` to install dependencies.
  4. Run `npm run dev` to start the server.

## Frontend (client)
- **Technologies:** React.js
- **Features:**
  - Display all blog posts
  - Forms for login, registration, and post creation (to be developed)
- **Setup:**
  1. Navigate to the `client` folder.
  2. Run `npm install` to install dependencies.
  3. Run `npm start` to start the React development server.

## Credentials
- **Test Users:** Register via `/api/auth/register`.  
- **Admin:** To test admin privileges, manually set a user's `isAdmin` field to `true` in the database.

## Additional Information
- Error handling is implemented via middleware.
- Authorization is managed with JWTs.

