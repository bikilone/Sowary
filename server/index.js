const express = require('express');
const pictures = require('./pictures.json');
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/pictures', function(req, res) {
  res.send(pictures);
});

app.get('/picture/:name', function(req, res) {
  res.sendFile(req.params.name, { root: __dirname + '/assets'});
});

app.listen(5000, () => console.log('Server is listening on port 5000'));
