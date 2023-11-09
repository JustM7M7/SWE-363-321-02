const fs = require("fs");
const path = require("path");
const source = process.argv[2];
const target = process.argv[3];
fs.readdir(source, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files
      .filter((file) => file.endsWith(".txt"))
      .forEach((file) => {
        fs.copyFile(path.join(source, file), path.join(target, file), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`${file} copied to ${target}`);
          }
        });
      });
  }
});
