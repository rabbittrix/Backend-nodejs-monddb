//require("dotenv").config();
const mongoose = require('mongoose');

//let db = null;
//const url = process.env.DATABASE_MONGO;
//const dbName = "db_finance";
//Set up default mongoose connection
//const mongoDB = 'mongodb://localhost/db_finance';
module.exports = mongoose.connect('mongodb://localhost:27017/db_finance', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Error.messages.general.required = "The attribute '{PATH}' is required."