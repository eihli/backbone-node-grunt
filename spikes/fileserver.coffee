http = require 'http'
handleRequest = (req, res) ->
  console.log(req.url)
server = http.createServer(handleRequest)
server.listen(8080, ->
  console.log 'server listening on port 8080')
