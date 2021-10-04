const http = require('http');
const fs = require('fs');

http.createServer(async (req, res) => {
  res.writeHead(200);
  fs.readFile('ae.txt', (err, data) => {
    !err ? console.log(`data is ${data}`) : console.log(`err is ${err}`);
  });
  res.write(`<h1>${__dirname}</h1>\n`);
  res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000');

console.log(`__dirname is ${__dirname}`);

console.log('Before')
fs.readFile('ae.txt', (err, data) => {
  !err ? console.log(`data is ${data}`) : console.log(`err is ${err}`);
});
console.log('After');
