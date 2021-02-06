const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
const ck = require("ckey");
const delFiles = require("./delFiles");
const userEmail = ck.EMAIL;
const userPassword = ck.PASSWORD;

const uploadsDir = __dirname //+ "/uploads/";

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userEmail,
    pass: userPassword,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/tell-story", (req, res) => {
  const imageName = req.body.imageName;
  console.log(imageName);
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const topic = req.body.topic;

  const attachments = imageName
    ? [
        {
          filename: imageName,
          // path: `./tellStoryForm/uploads/${imageName}`,
          path: `./tellStoryForm/${imageName}`,
        },
      ]
    : "";

  const mail = {
    from: name,
    to: userEmail,
    subject: "TELL YOUR STORY FORM SUBMISSION FROM AUTHORS!",
    attachments: attachments,
    html: `<h2>Hello, Sara, Cristina! You have a message from: <h1>${name}</h1></h2>
    <h2>Subject of the message:<h1>${topic}</h1></h2>
    <h2>Email to contact: <h1>${email}</h1></h2>
    <h2>Message: ${message}</h2>
    <img src='https://www.routledge.com/rsc/images/crccms/TFG202001-Authors-r3.jpg' alt='authors_logo'/>`,
  };
  contactEmail.sendMail(mail, (error) => {
    console.log(error);
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "SENT" }).then(delFiles());
    }
  });
});

module.exports = router;
