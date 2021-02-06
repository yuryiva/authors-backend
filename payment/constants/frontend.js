// const FRONTEND_DEV_URLS = ["http://localhost:3000"];
// const FRONTEND_PROD_URLS = ["http://localhost:3000", "http://localhost:3000"];

const FRONTEND_DEV_URLS = ["https://the-authors.netlify.app"];
const FRONTEND_PROD_URLS = ["https://the-authors.netlify.app", "https://the-authors.netlify.app"];

console.log("process.env.NODE_ENV =", process.env.NODE_ENV)
////****process.env.NODE_ENV values comes here from heroku config settings********
module.exports =
  process.env.NODE_ENV === "production333"
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;

    