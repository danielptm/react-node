const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
import Hello from './service/Hello';

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
  res.send(Hello.sayHi());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
