const fs = require("fs");

fs.appendFile("helloWorld.txt", "\nline 2!", (err) => {
    if (err) {
       return console.error(err); 
    }
    console.log("Success!")
});