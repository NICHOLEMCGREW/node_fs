const path = require("path");

const routes = {
    "GET/": {
        statusCode: 200,
        filePath: path.join(__dirname, "../public/index.html"),
        contentType: "text/html",
    },
    "GET/about": {
        statusCode: 200,
        filePath: path.join(__dirname, "../public/about.html"),
        contentType: "text/html",
    },
    "GET/contact": {
        statusCode: 200,
        filePath: path.join(__dirname, "../public/contact.html"),
        contentType: "text/html",
    },
    "POST/contact": {
        statusCode: 200,
        filePath: null,
        contentType: "application/json",
        response(reqBody) {
            return JSON.stringify({
                message: `Thank you for the message, ${reqBody.name}. We'll be in contact soon!`,
            });
        },
    },
    "*": {
        statusCode: 200,
        filePath: path.join(__dirname, "../public/notfound.html"),
        contentType: "text/html",
    },
};

module.exports = routes;