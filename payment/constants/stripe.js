const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_STRIPE_KEY
    : process.env.REACT_APP_STRIPE_KEY;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
