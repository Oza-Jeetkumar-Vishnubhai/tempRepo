const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = ()=>{
    try{
        mongoose.connect(process.env.MONGOOSE);
        console.log("connected to mongodb");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = dbConnection;