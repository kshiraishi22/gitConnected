const dotenv = require("dotenv");
// INITIALIZE DOTENV
dotenv.config();

// =============================================================
// =============================================================
//                  AUTHENTICATION HANDLING
//                  AUTH IS HANDLED BY AUTH0
// =============================================================
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const secured = require("../lib/secured"); // Checks whether user is authenticated when secured routes are hit
const passport = require("passport");

// I'm pretty sure we don't have to require in "util" and "url" in local versions of node.
// It breaks sometimes on heroku deploys if I don't
const util = require("util");
const url = require("url");
const querystring = require("querystring");

// Handles JSON Token authentication
const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://gitconnected.auth0.com/.well-known/jwks.json"
  }),
  // audience: "https://guarded-brook-11312.herokuapp.com/api/auth",
  issuer: "https://gitconnected.auth0.com/",
  algorithms: ["RS256"]
});


// =============================================================
  // =============================================================
  //                     AUTHENTICATION ROUTES
  // =============================================================

  // Perform the login, after login Auth0 will redirect to callback
  app.get(
    "/login",
    passport.authenticate("auth0", {
      scope: "openid"
    }),
    function(req, res) {
      res.redirect("/callback");
    }
  );

  // Perform the final stage of authentication and redirect to previously requested URL or '/user'
  app.get("/callback", function(req, res, next) {
    passport.authenticate("auth0", function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/login");
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        const returnTo = req.session.returnTo;
        delete req.session.returnTo;
        res.redirect(returnTo || "/inventory");
      });
    })(req, res, next);
  });

  // Perform session logout and redirect to homepage
  app.get("/logout", (req, res) => {
    req.logout();

    const returnTo = req.protocol + "://" + req.hostname;
    const port = req.connection.localPort;
    if (port !== undefined && port !== 80 && port !== 443) {
      returnTo += ":" + port;
    }

    const logoutURL = new url.URL(
      util.format("https://%s/v2/logout", process.env.AUTH0_DOMAIN)
    );
    const searchString = querystring.stringify({
      client_id: process.env.AUTH0_CLIENT_ID,
      returnTo: returnTo
    });
    logoutURL.search = searchString;

    res.redirect(logoutURL);
  });