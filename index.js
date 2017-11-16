var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {

  fs.readFile('demofile1.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
});
//Ctrl+S to save file
//then git commit -am "updated output" to commit to the github respitory
//then do git push azure master to push it to daveedweb.azurewebsites.net
var port = process.env.PORT || 1337;
server.listen(port);

console.log("YEE! Server running at http://localhost:%d", port);