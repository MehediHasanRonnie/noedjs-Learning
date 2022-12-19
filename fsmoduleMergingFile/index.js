const fs = require("fs");

//using write file in asynchronous programming we could write a file and work with it.
fs.writeFile("demo1.txt", "This is a simple demo file", function (error) {
  if (error) {
    console.log("error found");
  } else {
    console.log("successful");
  }
});

//to appending new items or text we usse append function
fs.appendFile(
  "demo1.txt",
  ",My name is Mehedi Hasan,I'm 26 years old",
  (error) => {
    if (error) {
      console.log("error found");
    } else {
      console.log("successful");
    }
  }
);
//to read the data from the file we use readFile function
fs.readFile("demo1.txt", "utf-8", (data, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// if we want to rename our file we use rename
fs.rename("demo1.txt", "demo2.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Successfull!");
  }
});

//exists is used to see if the file is really exists or not
fs.exists("demo2.txt", (result) => {
  if (result) {
    console.log(true);
  } else {
    console.log(false);
  }
});

// deletong file we use unlink

fs.unlink("demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful!");
  }
});
