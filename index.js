const express = require('express');
// var bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname + '/app/index.html'));
});


//set static path
app.use(express.static(path.join(__dirname, 'app')));
	
app.get('/', (req, res) => {
	res.render('index');
});


const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});