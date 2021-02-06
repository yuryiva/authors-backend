///THIS FILE IS ENTRY POINT
const app = require("./app");

const port = process.env.PORT || 6000;

app.listen(port, (error) => {
  if (error) {
    console.log(`SOMETHING WENT WRONG - ${error.message}`);
  }
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
