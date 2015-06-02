(function() {
  var handleRequest, http, server;

  http = require('http');

  handleRequest = function(req, res) {
    return console.log(req.url);
  };

  server = http.createServer(handleRequest);

  server.listen(8080, function() {
    return console.log('server listening on port 8080');
  });

}).call(this);

//# sourceMappingURL=fileserver.js.map
