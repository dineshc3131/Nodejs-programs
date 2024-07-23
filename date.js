var http= require('http')
var d =require('./date_module')
http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'text/html'})
   resp.write("The Date And Time currently are"+d.myDateTime())
  //resp.write("Welcome")
    resp.end()
}).listen(8080)