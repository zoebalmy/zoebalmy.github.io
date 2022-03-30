const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

// Create express app
const app = express();

/*********************************** REST API ***********************************/
// Require routers defined for visitorApi
const router = require('./visitorApi/router.js');

// Serve content on relevant route
app.use('/visitorApi', router);

/*********************************** MIDDLEWARES ***********************************/
// Enforce ssl
console.log('Enforcing ssl');
console.log(process.env);
app.use((req, res, next) => {
  console.log(
    `process.env.NODE_ENV==='production' => ${
      process.env.NODE_ENV === 'production'
    }`
  );
  if (process.env.NODE_ENV === 'production') {
    console.log(
      `req.headers['x-forwarded-proto]!='https' => ${
        req.headers['x-forwarded-proto'] != 'https'
      }`
    );
    if (req.headers['x-forwarded-proto'] != 'https') {
      console.log('Forwarding to https');
      return res.redirect('https://' + req.headers.host + req.url);
    } else {
      return next();
    }
  } else {
    return next();
  }
});

/*********************************** STATIC CONTENT ***********************************/
app.use(
  express.static(path.join(__dirname, '..', 'build'), {
    // Set cache control header to no-cache to force app to check for most recent files with server
    setHeaders: (res, path) => {
      res.setHeader('Cache-Control', 'no-cache');
    },
  })
);
app.use(
  express.static('public', {
    // Set cache control header to no-cache to force app to check for most recent files with server
    setHeaders: (res, path) => {
      res.setHeader('Cache-Control', 'no-cache');
    },
  })
);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 9001}`);
});
