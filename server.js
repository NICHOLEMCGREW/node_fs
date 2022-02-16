const fs = require("fs");
const path = require("path");
const http = require("http");

const routes = require("./routes")

const port = 3000;

http
.createServer((req, res) => {
    let parsedPath = path.parse(req.url);

    if (parsedPath.ext) {
        fs.readFile(
        path.join(__dirname, "./public", parsedPath.dir + parsedPath.base), 
        (err, contents) => {
            if (err) return res.end("Failed ot load staic asset");

            res.writeHead(200, { 
                "Content-Type": parsedPath.ext == ".js" ? "application/javascript" : "text/css",
            });
            res.write(contents);
            res.end();
        }
        );
    } else {
        let chunksArr = [];
        let route = routes[req.method + req.url] || routes["*"];
    
        req.on("data", (chunk) => chunksArr.push(chunk));
    
        req.on("end", () => {
            if (req.method == "POST" || req.method == "PUT") {
                let reqBody = JSON.parse(Buffer.concat(chunksArr).toString());
                let body = route.response(reqBody);
    
                res.writeHead(route.statusCode, { 
                    "Content-Type": route.contentType,
                });
                res.write(body);
                res.end();
            } else {
                fs.readFile(route.filePath, (err, contents) => {
                    if (err) {
                        console.error(err)
                        return res.end("Failed");
                    }
    
                   
                });
            }
        });

    }

    
})
.listen(port, () => console.log(`Server listening on port ${port}`));