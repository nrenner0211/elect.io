const mongoose = require('mongoose');

//create a connection to the mongo DB if deployed locally or remotely
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/electio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;