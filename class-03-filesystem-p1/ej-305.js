// Importing the fs and util modules
const fs = require("fs");
const util = require("util");

// TODO: si tiene problemas con process.cwd utilizar el module path y __dirname de NODEjs

// Reading the file using a promise & printing its text
const readFile = util.promisify(fs.readFile); // new Promise((resolve, reject) => { lo que quiero envolver con la promesa})
readFile("./test.js", "utf-8")
  .then((text) => {
    console.log("🚀 ~ file: eje-302.js:9 ~ .then ~ text", text);
  })
  .catch((err) => {
    console.log("🚀 ~ file: eje-302.js:14 ~ err", err);
  });

//  ejemplo 2
// Changing from callback to promise based
const readdir = util.promisify(fs.readdir);

// Reading files
const readFiles = async (path) => {
  try {
    const files = await readdir(path);
    // Printing current working directory
    console.log("🚀 ~ file: eje-302.js:24 ~ readFiles ~ files", files);
    console.log("directory path -->", process.cwd());
  } catch (error) {
    console.log("🚀 ~ file: ej-305.js:27 ~ readFiles ~ error", error);
  }
};

readFiles(process.cwd()).catch((err) => {
  console.log(err);
});
