http = require 'http'
fs = require 'fs'
url = require 'url'
path = require 'path'
port = 8080
handleRequest = (req, res) ->
  uri = url.parse(req.url).pathname
  filename = path.join(process.cwd(), uri)
  fs.exists(filename, (exists) ->
    if not exists
      res.writeHead(404)
      res.end()
      return
    )

  if fs.statSync(filename).isDirectory()
    filename += 'index.html'
  console.log uri
  fs.readFile(filename, (err, data) ->
    console.log(filename)
    res.end(data)
  )

server = http.createServer(handleRequest)

server.listen(port, ->
  console.log 'server listening on port ' + port
  )