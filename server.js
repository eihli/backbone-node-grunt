(function() {
  var fs, handleRequest, http, port, server;

  http = require('http');

  fs = require('fs');

  port = 8080;

  handleRequest = function(req, res) {
    return fs.readFile('./dist/index.html', function(err, data) {
      if (err) {
        throw err;
      }
      return res.end(data);
    });
  };

  server = http.createServer(handleRequest);

  server.listen(port, function() {
    return console.log('server listening on port ' + port);
  });

}).call(this);

//# sourceMappingURL=server.js.map
