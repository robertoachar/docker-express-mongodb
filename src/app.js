const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');

const error = require('./error');

const app = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, GET, OPTIONS, PATCH, PUT, POST');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

app.use(error.notFound);
app.use(error.catchAll);

module.exports = app;
