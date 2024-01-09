const express = require('express');
const admin = require('firebase-admin');

const app = express();
const serviceAccount = require('path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Add your Firebase project config here
});

// Middleware to check custom claims
const checkClaims = (claim) => {
  return (req, res, next) => {
    const user = req.user;

    if (user && user[claim]) {
      // User has the required custom claim, allow access
      next();
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  };
};

// Example route with custom claim check
app.get('/admin', checkClaims('admin'), (req, res) => {
  res.send('Admin route - Only accessible to users with admin claim');
});

// Example route without custom claim check
app.get('/public', (req, res) => {
  res.send('Public route - Accessible to all users');
});

// Firebase Authentication middleware
app.use(async (req, res, next) => {
  const idToken = req.headers.authorization;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Vercel will automatically handle the deployment, so no need for a separate server setup

module.exports = app;
