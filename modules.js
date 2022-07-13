const fs = require("fs");


// Reading file
let text = fs.readFileSync("readme.txt", "utf-8")

console.log("The content of the file is")
console.log(text);

// replacing text
text = text.replace(/our/gi, "new");

// creating a file
console.log("Creating a new file...")
fs.writeFileSync("readmeNew.txt", text);

