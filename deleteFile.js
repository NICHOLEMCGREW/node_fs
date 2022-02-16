const fs = require("fs");

fs.unlink("./helloWorld.txt", (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("Success!")
});