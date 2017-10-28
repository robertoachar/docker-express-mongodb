const winston = require('winston');

require('dotenv').config();

const app = require('./app');

app.listen(3000, () => {
  winston.info(`Environment: ${process.env.NODE_ENV}`);
  winston.info(`Express: ${process.env.PORT}`);
});
