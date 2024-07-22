var http = require("http");
http.createServer(function(req,resp){
resp.writeHead(200,{'content-type':'text/html'});
resp.write('<form name="file_input" method="post">');
resp.write('<h1> Select File</h1>');
resp.write('<input type="file" name="fname"><br>');
resp.write('<input type="submit"><br>');
resp.write('</form>');
return resp.end();

}).listen(8081);
console.log('Server Running at http:127.0.0.1:8081/');