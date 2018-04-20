const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('User', UserSchema);
