// os and path discussion

//.............os...............
// const os = require("os");
//console.log(os.userInfo());  //to se user information
// console.log(os.homedir()); // to see the home directory where we are working
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

// const { totalmem, freemem } = require("os"); //we just distructured what we need from the os module
// console.log(totalmem());
// console.log(freemem());

// console.log(__dirname);
// console.log(__filename);

//.................Path......................

const path = require("path");
//console.log(path); //to see what path offers

// const extentionName = path.extname("index.html");
// console.log(extentionName);

const joinName = path.join(__dirname + "./views");
console.log(joinName);
