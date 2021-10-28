const { spawn } = require("child_process");
const { fork } = require("child_process");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const { defaultCoreCipherList } = require("constants");
/*const server = require("http").createServer();

server.on("request", (req, res) => {
  if (req.url == "/compute") {
    const compute = fork("./computation.js");
    compute.send("start");
    compute.on("msg", (sum) => {
      res.end(`sum is ${sum}`);
    });
  } else {
    res.end("OK");
  }
});
/*const child = spawn("find . -type f | wc -l", {
  stdio: "inherit",
  shell: true,
  cwd: "/users/pranay/downloads",
});*/

//server.listen(3000);

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("./working-pdf.pdf"));
doc.text("ABCD");
doc.text().font("Roboto");
doc.addPage().text("DEF");

doc.end();
