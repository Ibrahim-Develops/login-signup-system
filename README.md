# MERN Stack Authentication System  

A full-featured authentication system built using the MERN stack (MongoDB, Express.js, React, and Node.js).  

Repository: [login-signup-system](https://github.com/Ibrahim-Develops/login-signup-system.git)  

## Features  
- **JWT Authorization**: Secure authentication with JSON Web Tokens (JWT).  
- **Signup and Login**: User-friendly signup and login functionality.  
- **Logout**: Secure session termination.  
- **Protected Routing**: Restrict access to specific routes for authenticated users only.  

### Backend Features  
- Built with Node.js and Express.js.  
- MongoDB for storing user data.  
- Password hashing with `bcrypt` for enhanced security.  
- JWT for secure and stateless authentication.  

### Frontend Features  
- Built with React for a dynamic and responsive UI.  
- Form validation for both signup and login.  
- Protected routes accessible only to authenticated users.  

## Getting Started  

### Prerequisites  
- Install [Node.js](https://nodejs.org/)  
- Set up a [MongoDB](https://www.mongodb.com/) database  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Ibrahim-Develops/login-signup-system.git
   cd login-signup-system
   
# Install backend dependencies
cd backend  
npm install  

# Install frontend dependencies
cd ../frontend  
npm install  

# Create a .env file in the backend directory with the following content
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# login-signup-system/  
├── backend/  
│   ├── controllers/  
│   ├── models/  
│   ├── routes/  
│   ├── index.js  
│   └── .env  
├── frontend/  
│   ├── src/  
│   │   ├── components/  
│   │   ├── pages/  
│   │   ├── App.jsx  
│   │   └── main.jsx  
└── README.md  
