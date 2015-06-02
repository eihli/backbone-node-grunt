http = require 'http'
fs = require 'fs'
port = 8080
handleRequest = (req, res) ->
  fs.readFile('./dist/index.html', (err, data) ->
    if err then throw err
    res.end(data)
  )

server = http.createServer(handleRequest)

server.listen(port, ->
  console.log 'server listening on port ' + port
  )