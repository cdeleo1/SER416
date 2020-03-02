const okta = require("@okta/okta-sdk-nodejs");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;

// Define an Okta client so any user management tasks can be performed
const oktaClient = new okta.Client({
  orgUrl: "https://dev-498289.okta.com",
  token: "00q-saT1R6qHgdge24IFhsq69rBjWmKTmMos8gMrNW"
});

// Define the OpenID Connect client
const oidc = new ExpressOIDC({
  issuer: "https://dev-498289.okta.com/oauth2/default",
  client_id: "0oa2v0n9s8aqVlDFo4x6",
  client_secret: "T8N4jiVzIuTFQC0h8y-DKWMPmXmcUfdb4ci_U-PL",
  redirect_uri: "http://localhost:3000/users/callback",
  scope: "openid profile",
  routes: {
    login: {
      path: "/users/login"
    },
    callback: {
      path: "/users/callback",
      defaultRedirect: "/dashboard"
    }
  }
});

/*
var oktaClient = new okta.Client({
    orgUrl: "https://dev-498289.okta.com",
    token: "00q-saT1R6qHgdge24IFhsq69rBjWmKTmMos8gMrNW"
});

const oidc = new ExpressOIDC({
    issuer: "https://dev-498289.okta.com/oauth2/default",
    client_id: "0oa2v0n9s8aqVlDFo4x6" ,
    client_secret: "T8N4jiVzIuTFQC0h8y-DKWMPmXmcUfdb4ci_U-PL",
    redirect_uri: 'http://localhost:3000/users/callback',
    scope: "openid profile",
    routes: {
        login: {
            path: "/users/login"
        },
        callback: {
            path: "/users/callback",
            defaultRedirect: "/dashboard"
        }
    }
});

app.use((req, res, next) => {
    if (!req.userinfo) {
        return next();
    }

    oktaClient.getUser(req.userinfo.sub)
    .then(user => {
        req.user = user;
        res.locals.user = user;
        next();
    }).catch(err => {
        next(err);
    });
});

function loginRequired(req, res, next) {
    if (!req.user) {
        return res.status(401).render("unauthenticated");
    }
    next();
}

*/
module.exports = { oidc, oktaClient };