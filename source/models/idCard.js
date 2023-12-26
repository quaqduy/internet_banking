const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const idcard = new Schema({
  email:String,
  frontIdCard: String,
  backIdCard:String
});

module.exports = mongoose.model('Idcard', idcard);