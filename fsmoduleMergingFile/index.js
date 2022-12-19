const fs = require("fs");

fs.writeFile("demo1.txt", "This is a simple demo file", function (error) {
  if (error) {
    console.log("error found");
  } else {
    console.log("successful");
  }
});

// fs.appendFile(
//   "demo1.txt",
//   ",My name is Mehedi Hasan,I'm 26 years old",
//   (error) => {
//     if (error) {
//       console.log("error found");
//     } else {
//       console.log("successful");
//     }
//   }
// );

// fs.readFile("demo1.txt", "utf-8", (data, error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// fs.rename("demo1.txt", "demo2.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Successfull!");
//   }
// // });

// fs.exists("demo2.txt", (result) => {
//   if (result) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// });

// fs.unlink("demo2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successful!");
//   }
// });
