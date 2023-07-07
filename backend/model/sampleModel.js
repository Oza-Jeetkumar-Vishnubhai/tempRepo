const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    name:{
        type:"string",
    },
    sirname:{
        type:"string"
    }
});

const sampleModel = mongoose.model('sampleModel',sampleSchema);

module.exports=sampleModel;