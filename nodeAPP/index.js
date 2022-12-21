//creating server

const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT;

const handelReadFile = (fileName, statusCode, req, res) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-Type": "Text/html" });
      res.write(data);
      res.end();
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handelReadFile("./views/index.html", 200, req, res);
  } else if (req.url === "/about") {
    handelReadFile("./views/about.html", 200, req, res);
  } else if (req.url === "/contact") {
    handelReadFile("./views/contact.html", 200, req, res);
  } else {
    handelReadFile("./views/404.html", 404, req, res);
  }
});

server.listen(PORT, () => {
  console.log(`server is running`);
});
