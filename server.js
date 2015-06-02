(function() {
  var fs, handleRequest, http, path, port, server, url;

  http = require('http');

  fs = require('fs');

  url = require('url');

  path = require('path');

  port = 8080;

  handleRequest = function(req, res) {
    var filename, uri;
    uri = url.parse(req.url).pathname;
    filename = path.join(process.cwd(), uri);
    fs.exists(filename, function(exists) {
      if (!exists) {
        res.writeHead(404);
        res.end();
      }
    });
    if (fs.statSync(filename).isDirectory()) {
      filename += 'index.html';
    }
    console.log(uri);
    return fs.readFile(filename, function(err, data) {
      console.log(filename);
      return res.end(data);
    });
  };

  server = http.createServer(handleRequest);

  server.listen(port, function() {
    return console.log('server listening on port ' + port);
  });

}).call(this);

//# sourceMappingURL=server.js.map
