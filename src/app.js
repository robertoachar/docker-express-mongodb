const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const error = require('./error');

const app = express();
const router = express.Router();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('tiny'));

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

app.use('/api', router);

require('./user/user.router')(router);

app.use(error.notFound);
app.use(error.catchAll);

module.exports = app;
