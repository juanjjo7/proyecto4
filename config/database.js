const mongoose = require('mongoose');

const host ="localhost";
const port ="27017";
const db = "hr";


exports.mongoConnect =() =>{
    console.log("entro")
    const mongoStringConnection ='mongodb://127.0.0.1:27017/hr';
    mongoose.connect(mongoStringConnection);
    mongoose.Promise =global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on('error', console.error.bind(console,"Mongodb connection error"))
 console.log("bien")
}