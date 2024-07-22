var http = require("http");
http.createServer(function(req,resp){
resp.write("Hello");
resp.end();

}).listen(8081);
console.log('Server Running at http:127.0.0.1:8081/');