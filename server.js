(function() {
  var handleRequest, http, port, server;

  http = require('http');

  port = 8080;

  handleRequest = function(req, res) {
    return res.end('it works');
  };

  server = http.createServer(handleRequest);

  server.listen(port, function() {
    return console.log('server listening on port ' + port);
  });

}).call(this);

//# sourceMappingURL=server.js.map
