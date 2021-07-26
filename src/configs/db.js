const mongoose = require('mongoose');

const connectDB = () => {  
const pathURL = 'mongodb://localhost/costumer-queue-api';
const connectionOption = {
  useNewUrlParser: true, 
  useUnifiedTopology: true,   
  useCreateIndex: true,
  useFindAndModify: false, 
}
mongoose.connect(pathURL, connectionOption);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database Mongoose Connected !");
});

};

module.exports = connectDB;