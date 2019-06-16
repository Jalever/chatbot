var express = require("express");
var app = express();
var path = require("path");
var server = require("http").createServer(app);
var port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log("Server is listening on http://47.106.132.253:%d", port);
});

app.use(express.static(path.join(__dirname, "./../dist")));
