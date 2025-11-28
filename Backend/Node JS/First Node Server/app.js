const http = require('http');

const requestListener = (req, res) => {
  console.log(req);
}

const server = http.createServer(requestListener);
const PORT = 3000;

server.listen(PORT, ()=> {
  console.log(`Server is running at https://localhost:${PORT}`)
})