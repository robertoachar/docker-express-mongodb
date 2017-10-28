const mongoose = require('mongoose');
const winston = require('winston');

require('dotenv').config();

mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  winston.error(err.message);
});

require('./user/user.model');

const app = require('./app');

app.listen(process.env.PORT, () => {
  winston.info(`Environment: ${process.env.NODE_ENV}`);
  winston.info(`Express: ${process.env.PORT}`);
});
