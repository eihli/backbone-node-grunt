http = require 'http'
port = 8080
handleRequest = (req, res) ->
  res.end('it works')

server = http.createServer(handleRequest)

server.listen(port, ->
  console.log 'server listening on port ' + port
  )