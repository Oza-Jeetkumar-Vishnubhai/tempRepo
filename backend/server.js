const express = require('express');
const app  = express();
const userRoute = require("./routes/userRoutes")
const adminRoute = require("./routes/adminRoutes")
const mdb = require('./config/dbConfig')
const sampleModel = require('./model/sampleModel')

mdb();


app.get('/',(req,res)=>{
    try{
        const sampleData = {
            name:"nirdeshi",
            sirname:"jotangia"
        }
        const data = sampleModel(sampleData);
        data.save();
        res.send("hii");
    }
    catch(err){
        res.send(err);
    }
})

app.use('/user',userRoute);
app.use('/admin',adminRoute);

app.listen(8000,()=>{
    console.log("running");
})