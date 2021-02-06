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

router.post("/subscribe", (req, res) => {
  const email = req.body.email;

  const mail = {
    from: `SUBSCRIBE REQUEST`,
    to: userEmail,
    subject: "SUBSCRIBE REQUEST",
    html: `<h2>Hello, Sara, Cristina! You have a subscription request: 
            <h1>${email}</h1>
            <img src='https://www.routledge.com/rsc/images/crccms/TFG202001-Authors-r3.jpg' alt='authors_logo'/>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "SENT" });
    }
  });
});

module.exports = router;
