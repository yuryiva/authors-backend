The backend part for the Authors project. It has functionality to send text messages with or without a file attached. These messages come to the assigned gmail account. This part was done by using nodemailer, rimraf npm packages. In order to send a file it first gets stored on the server and after sending the email this file is deleted automatically 3 seconds later.
The backend part also has an up and running form to commit payments using stripe payment system. 

__FOR THE BACKEND PART A .ENV FILE IS REQUIRED:__

- ___EMAIL=____.........actual gmail for emails............
- ___PASSWORD=____......password for gmail.................
- ___PORT=8080___
- ___NODE_ENV=development___.........OR IT CAN BE SWITCHED TO PRODUCTION FOR DEPLOYMENT PURPOSES
- ___REACT_APP_STRIPE_KEY=sk_test____........the actual api key for stripe


you also might need to lower the security of gmail