// const FRONTEND_DEV_URLS = ["http://localhost:3000"];
// const FRONTEND_PROD_URLS = ["http://localhost:3000", "http://localhost:3000"];

// const FRONTEND_DEV_URLS = ["https://the-authors.netlify.app"];
// const FRONTEND_PROD_URLS = ["https://the-authors.netlify.app", "https://the-authors.netlify.app"];

const FRONTEND_DEV_URLS = ["https://festive-rosalind-4c72b4.netlify.app"];
const FRONTEND_PROD_URLS = ["https://festive-rosalind-4c72b4.netlify.app", "https://festive-rosalind-4c72b4.netlify.app"];

module.exports =
  process.env.NODE_ENV === "production"
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;

    