//creating server

const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleReadFile(200, "./views/index.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./views/about.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "./views/contact.html");
  } else {
    handleReadFile(400, "./views/error.html");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`server is running at http://${hostname}:${PORT}`);
});

/*if (req.url === "/") {
    fs.readFile("./views/index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./views/about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("./views/contact.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./views/error.html", (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
  */
