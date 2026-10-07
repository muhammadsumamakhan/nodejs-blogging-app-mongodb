const mongoose = require('mongoose');



// mongoDB connect
async function mongoDBconnect() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}


module.exports = { mongoDBconnect };