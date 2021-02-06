const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
const ck = require("ckey");

const userEmail = ck.EMAIL;
const userPassword = ck.PASSWORD;

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

router.post("/get-in-touch", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const topic = req.body.topicChosen;

  const mail = {
    from: name,
    to: userEmail,
    subject: "GET IN TOUCH FORM SUBMISSION FROM AUTHORS!",
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
      res.json({ status: "SENT" });
    }
  });
});

module.exports = router;
