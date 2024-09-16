const mongoose = require('mongoose');
const URL = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        if (!URL) {
            throw new Error("MONGODB_URI is not defined in environment variables.");
        }
        await mongoose.connect(URL); // Remove deprecated options
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);     
    }
};

module.exports = connectDB;
