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
    if (fs.statSync(filename).isDirectory()) {
      filename += 'dist/index.html';
    }
    console.log(req.url);
    if (req.url.match('/favicon\.ico')) {
      req.writeHead(200, {
        'Content-Type': 'image/xicon'
      });
      req.end();
    }
    fs.exists(filename, function(exists) {
      if (!exists) {
        res.writeHead(404);
        res.end("file doesn't exist");
      }
    });
    return fs.readFile(filename, {
      encoding: 'utf8'
    }, function(err, data) {
      if (err) {
        console.log(err);
      }
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
