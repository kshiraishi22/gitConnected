//********** DEPENDENCIES *********************************************************************************//

const express = require("express"); // web server
const mongoose = require("mongoose"); //database
const dbConfig = require("./db/config"); //database 
const routes = require("./routes")//api router
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const compression = require("compression");
const userInViews = require("./client/lib/userInViews");
const dotenv = require("dotenv");


//********* SERVER CONFIG *********************************************************************************//

dotenv.config();

const app = express();
app.use(compression());
const PORT = process.env.PORT || 3001; //deployed port OR proxy port [REACT];

// DEFINES SESSION INFO FOR DEV/PRODUCTION
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {}
};

if (app.get("env") === "production") {
  // N.B. DON'T REMOVE THE PROXY TRUST FOR HEROKU DEPLOYMENT
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

// Initializes sessions stored in memory
// N.B. MEMORY STORAGE IS VERY INSECURE AND LEAKY
// app.use(session(sess));

// RETURNS USER OBJECT AS PART OF THE RESPONSE
// LETS CONTENT BE DYNAMICALLY UPDATED DEPENDING ON USER STATE
app.use(userInViews());

app.use(express.urlencoded({ extended: true })); //handle post requests
app.use(express.json);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); //serve static directory when deployed
}

// AUTHENTICATION STRATEGY
// USES AUTH0 AS A SERVICE
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || "http://localhost:3000/callback",
    returnTo: 'http://localhost:3000/'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

// INITIALIZES AUTH STRATEGY
passport.use(strategy);

// MAKES EXPRESS USE PASSPORT AND PASSPORT USE SESSIONS
app.use(passport.initialize());
app.use(passport.session());

// DEALS WITH LOGGING USERS IN AND OUT
// I'LL BE HONEST, I DON'T ENTIRELY UNDERSTAND WHAT THIS DOES
// -- SEEMS TO BE IMPORTANT THOUGH --
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(routes) //API routes

//********** SYNC-DB ***********************************************************************************//

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/devNetwork_DB", dbConfig.settings);
app.listen(PORT, function() {
  console.log(`API Server listening on port:${PORT}!`);
});
