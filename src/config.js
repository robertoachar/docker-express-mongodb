/* eslint no-process-env: 0 */

require('dotenv').config();

const environment = ['NODE_ENV', 'PORT', 'DATABASE'];

environment.forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE
};
