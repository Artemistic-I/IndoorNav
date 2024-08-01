const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/indoorNav';
let connection;

mongoose.Promise = global.Promise;

// Connecting to the MongoDB server
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => {
    // Storing the connection instance for later use if needed
    connection = result.connection;
    // Log a success message if the connection is established
    console.log("Connection to MongoDB Successful!");
}).catch(err => {
    // Log an error message if the connection fails
    console.log("Connection to MongoDB Failed!", err);
});