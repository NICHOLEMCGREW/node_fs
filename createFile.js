const fs = require("fs");
const path = require("path");

fs.writeFile("./helloWorld.txt", "Hello World!", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Success!");
});