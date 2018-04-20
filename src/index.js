const mongoose = require('mongoose');
const winston = require('winston');

const config = require('./config');

mongoose.connect(config.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  winston.error(err.message);
});

require('./user/user.model');

const app = require('./app');

app.listen(config.PORT, () => {
  winston.info(`Environment: ${config.NODE_ENV}`);
  winston.info(`Express: ${config.PORT}`);
});
