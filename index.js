import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import cors from 'cors';
import 'dotenv/config';
import session from 'express-session';
import UserRoutes from './Kambaz/Users/routes.js';
import CourseRoutes from './Kambaz/Courses/routes.js';
import ModuleRoutes from './Kambaz/Modules/routes.js';
import AssignmentRoutes from './Kambaz/Assignments/routes.js';

const app = express();

// CORS middleware configuration
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || 'https://symphonious-crostata-4f782f.netlify.app',  // You can set the URL dynamically using your environment variable
  })
);

// Session configuration
const sessionOptions = {
  secret: process.env.SESSION_SECRET || 'kambaz', // Secret key for session encryption
  resave: false,
  saveUninitialized: false,
};

// Enabling secure cookie and proxy settings in production (HTTPS)
if (process.env.NODE_ENV !== 'development') {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: 'none',
    secure: true, // Set this to true when using HTTPS
    domain: process.env.NODE_SERVER_DOMAIN, // Specify the domain for your session cookie
  };
}

// Apply session middleware
app.use(session(sessionOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize routes
Lab5(app);
Hello(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
