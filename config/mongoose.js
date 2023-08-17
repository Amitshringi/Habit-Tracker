const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://amitshringi0786:haaKQa558Kyx3m6u@cluster0.pyyanvu.mongodb.net/');

const db=mongoose.connection;

db.on('error', console.error.bind(console, "Error Connection to MongoDB"));

db.once('open', function(){
    console.log('Conected to Database:: MongoDB');
})

module.exports=db;