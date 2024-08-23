const fs = require("fs/promises");
const path = require("path");

async function readFromDirectory(directoryPath) {
  const dirFiles = fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err.message);
      return;
    }
  });
  
  return Array.from(await dirFiles).reduce((a, file) => {
    const filePath = path.join(directoryPath, file);
    a.push(filePath);

    console.log("Full path to file:", filePath);

    return a
  }, []);
}

module.exports = {
  readFromDirectory,
};
