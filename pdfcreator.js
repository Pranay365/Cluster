const fs = require("fs");

fs.writeFile("myfile.pdf", "abcd", (err, data) => {
  err && console.log(err);
  data && console.log(data);
});
