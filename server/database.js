const mongoose = require('mongoose');
require('dotenv').config();
const dataBase = process.env.ATLAS_URI;

// Connection To The Database
const dbConnection = async () => {
    try {
        await mongoose.connect(dataBase, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    } catch (err) {
        console.log('Error while connecting with database')
        console.log(err);
    }
};

module.exports = dbConnection;

