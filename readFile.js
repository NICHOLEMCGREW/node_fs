const fs = require("fs");

fs.readFile("helloWorld.txt", (err, contents) => {
    if (err) {
        console.error();(err);
        return;
    }
    console.log(contents.toString());
    console.log("/nSuccessfully read contents");
});