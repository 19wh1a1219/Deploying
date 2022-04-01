const { appendFile } = require('fs');
var http = require('http');

var myServer = http.createServer(function(req, res){
    res.write('<h1>Hello World!!</h1>')
    res.end();
});

if(process.env.NODE_ENV == "production") {
    appendFile.use(express.static("web-project/build"));
}

myServer.listen(process.env.PORT || 3000);
console.log('go to port 3000');