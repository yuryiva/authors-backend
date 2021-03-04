const rimraf = require("rimraf");
const path = require("path");
const fs = require("fs");

const uploadsDir = __dirname; // + "/uploads/" if required;

const delFiles = () =>
  fs.readdir(uploadsDir, function (err, files) {
    files.forEach(function (file, index) {
      if (!file.includes(".js")) {
        console.log(file, " has to be deleted in 3 seconds");
        fs.stat(path.join(uploadsDir, file), function (err, stat) {
          if (err) {
            return console.error(err);
          }
          setTimeout(() => {
            return rimraf(path.join(uploadsDir, file), function (err) {
              if (err) {
                return console.error(err);
              }
              console.log(file, " successfully deleted");
            });
          }, 3000);
        });
      }
    });
  });

module.exports = delFiles;
