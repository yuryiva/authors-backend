<p align="center">
  <h1 align="center">Backend part for the Authors project</h1>

  <p align="center">
    <i>
    The code includes functionality for sending emails (subscribe request, get in touch form, tell a story form, payment notification and a book preorder notification) to a particular gmail account with or without a file attached to the message. In case the email was sent with a file attached, the file is first saved on a server and after having been sent to the gmail account, it gets automatically deleted 3 seconds later.
    </i>
    <br />
    <br />
    <img src='./screenshot.jpg' alt='screenshot' width=948px height=auto>
</p>
</br>

# Table of Contents

- [:floppy_disk: Installation](#floppy_disk-installation)
- [:microscope: About the code](#microscope-about-the-code)

</br>

# :floppy_disk: Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/yuryiva/authors-backend
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. Run the app in the development mode with `npm start`

# :microscope: About the code

In order to send messages nodemailer npm package was used. The automatic files deletion was done by modifying code of rimraf npm package.

The payment system was done by applying [Stripe](https://stripe.com/)


Also for the backend part a .ENV FILE is required:

EMAIL=.........actual gmail for emails............

PASSWORD=......password for gmail.................

PORT=8080

NODE_ENV=development......... or it can be switched to production for deployment purposes 

REACT_APP_STRIPE_KEY=sk_test_........the actual api key for stripe

- you also might need to lower the security of gmail
#
<a href="https://the-authors.netlify.app/" target="_blank">Live presentation</a>

Frontend part of the project code is [here](
https://github.com/yuryiva/authors-frontend)