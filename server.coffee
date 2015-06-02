http = require 'http'
fs = require 'fs'
url = require 'url'
path = require 'path'
port = 8080
handleRequest = (req, res) ->
  uri = url.parse(req.url).pathname
  filename = path.join(process.cwd(), uri,)
  if fs.statSync(filename).isDirectory()
    filename += 'dist/index.html'
  # console.log(req.url)
  # console.log(filename)
  console.log req.url
  if req.url.match '/favicon\.ico'
    req.writeHead(200, {'Content-Type': 'image/xicon'})
    req.end()
  
  fs.exists(filename, (exists) ->
    if not exists
      res.writeHead(404)
      res.end("file doesn't exist")
      return
    )
  fs.readFile(filename, {encoding: 'utf8'}, (err, data) ->
    if err
      console.log(err)
    console.log(filename)
    res.end(data)
  )

server = http.createServer(handleRequest)

server.listen(port, ->
  console.log 'server listening on port ' + port
  )