# Food Blog App

A MERN stack application for sharing and managing food recipes.

## Project Structure

```
project1/
├── backend/           # Node.js/Express backend
│   ├── config/       # Database configuration
│   ├── controller/   # Request handlers
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API routes
│   └── server.js     # Entry point
└── frontend/         # React frontend
    └── food-blog-app/
        ├── components/  # React components
        ├── src/        # Source files
        └── public/     # Static assets
```

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt (password hashing)

### Frontend

- React 19
- Vite
- React Router DOM
- Axios

## Prerequisites

- Node.js installed
- MongoDB running locally or MongoDB Atlas connection
- Backend server running on port 5000

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:

   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend/food-blog-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Current Features

### Implemented

- User authentication (Login/Signup)
- Recipe display
- Navigation with Home, My Recipe, and Favourites
- Modal-based login form
- Responsive design with custom CSS

### In Progress

- Recipe creation and management
- User profile functionality
- Recipe favoriting system

## API Endpoints

### Authentication

- `POST /login` - User login
- `POST /signUp` - User registration

### Recipes

- `GET /recipe` - Get all recipes
- `POST /recipe` - Create new recipe (to be implemented)

## Development Notes

- Backend runs on `http://localhost:5000`
- Frontend development server uses Vite
- React Router handles client-side routing
- Axios is used for API communication between frontend and backend

## Future Enhancements

- Complete recipe CRUD operations
- Image upload for recipes
- User profile pages
- Recipe search and filtering
- Social features (comments, likes)
- Recipe categories and tags
