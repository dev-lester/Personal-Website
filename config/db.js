const mongoose = require('mongoose');


// connect mongoDB
const connectDB = async () => {

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    console.log(`MongoDB Connected ${conn.connection.host}`);

}


module.exports = connectDB;