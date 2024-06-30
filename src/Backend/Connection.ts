import mongoose from "mongoose";
import '../../dotenv.config.ts'

const dbHost = process.env.VITE_DB_HOST
const dbPort = process.env.VITE_DB_PORT
const dbName = process.env.VITE_DB_NAME || ""

const connectDB = async() => {
    try {

        if(dbName == "")
            return;

        const uri = `mongodb://${dbHost}:${dbPort}/${dbName}`;
        await mongoose.connect(uri);

        console.log(`Successfully connected to MongoDB\nNow using database: \'${dbName}\'`);
    } catch (e) {
        console.error('MongoDB connection error: ', e);
        throw e;
    }
}

export default connectDB;