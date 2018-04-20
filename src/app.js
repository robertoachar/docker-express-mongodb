const bodyParser = require('body-parser');
const cors = require('@robertoachar/express-cors');
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
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

app.use('/api', router);

require('./user/user.router')(router);

app.use(error.notFound);
app.use(error.catchAll);

module.exports = app;
