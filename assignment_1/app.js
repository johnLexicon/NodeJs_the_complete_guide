const http = require('http');
const fs = require('fs');

const requestListener = (req, res) => {
  res.setHeader('content-type', 'text/html');
  let templatePath = undefined;
  switch (req.url) {
    case '/':
      templatePath = '/templates/greetings.html';
      break;
    case '/users':
      templatePath = '/templates/users.html';
      break;
    case '/create-user':
      res.statusCode = 302;
      res.setHeader('Location', '/');

      if (req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const userName = parsedBody.split('=')[1];
          console.log(userName);
        });
      }
      return res.end();
    default:
      res.write('URL not available: ' + req.url);
      return res.end();
  }

  fs.readFile(__dirname + templatePath, 'utf8', (err, data) => {
    if (err) {
      res.write(`ERROR: ${err.message}`);
      return res.end();
    }
    res.write(data);
    res.end();
  });
};

const server = http.createServer(requestListener);

server.listen(9999);
