const tellStoryRouter = require("./tellStoryForm/tellStoryForm");
const getInTouchRouter = require("./getInTouchForm/getInTouchForm");
const preOrderRouter = require("./preOrder/preOrder");
const subscribeRouter = require("./subscribe/subscribe");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();

const testRouter = require("./test/test");

app.use(cors());
app.use(express.json());

app.use("/", [
  tellStoryRouter,
  getInTouchRouter,
  preOrderRouter,
  testRouter,
  subscribeRouter,
]);

app.get("/hello", (req, res) => {
  res.send("HELLO FROM THE AUTHORS-SERVER");
});
app.get("/test", (req, res) => {
  res.send("TEST TEST TEST FROM THE AUTHORS-SERVER");
});
app.get("/test2", (req, res) => {
  res.send("THIS IS TEST 2 FROM THE AUTHORS-SERVER");
});

////////////////// UPLOAD FILES
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tellStoryForm");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).array("file"); //if we need 1 file to upload then ....({ storage: storage }).single("file")

app.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});
////////////////////
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

module.exports = app;

//Payment system

const SERVER_CONFIGS = require("./payment/constants/server");

const configureServer = require("./payment/server");
const configureRoutes = require("./payment/routes");

configureServer(app);
configureRoutes(app);
