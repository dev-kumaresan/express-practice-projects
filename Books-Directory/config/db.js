const mongoose = require('mongoose');
var url ='mongodb://localhost:27017/books';
const connection = mongoose.createConnection(url);
module.exports = connection;