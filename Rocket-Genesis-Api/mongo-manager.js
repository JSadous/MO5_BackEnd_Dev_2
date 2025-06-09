const mongoose = require('mongoose')
require('dotenv').config()


const openMongoConnection = () => {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
        console.log("connected to MongoDB");
    });
    mongoose.connect('mongodb+srv://JSadous:Lovecode1@cluster0.yxjfahe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
};

mongoose.set('strictQuery', true)

module.exports = {openMongoConnection};