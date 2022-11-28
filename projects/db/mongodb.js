const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const mongoclient = async function() {

    const connection = await mongoose.connect(process.env.MONGOURL);
    return connection;
}


module.exports = {mongoclient, mongoose};
