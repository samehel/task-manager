import mongoose, { Connection } from "mongoose";

const dbHost = process.env.VITE_DB_HOST || 'localhost'
const dbPort = process.env.VITE_DB_PORT || 27017
const dbName = process.env.VITE_DB_NAME || 'task_manager'
const uri = `mongodb://${dbHost}:${dbPort}`;

const connectDB = async() => {
    try {
        let db: Connection;
        await mongoose.connect(uri);

        console.log(`Successfully connected to MongoDB`);
        console.log(`Checking to see if database \'${dbName}\' exists...`);

        const adminDB = mongoose.connection.useDb('admin')

        const dbExists = await adminDB.db.admin().listDatabases()
            .then(DBs => DBs.databases.map(db => db.name).includes(dbName))

        if(dbExists) {
            console.log(`Database \'${dbName}\' exists`);
            db = mongoose.connection.useDb(dbName);
            console.log(`Successfully connected to database: \'${dbName}\'`);
        } else {
            console.log(`Database \'${dbName}\' does not exist`);
            console.log(`Creating and connecting to database: \'${dbName}\'`);
            await adminDB.db.admin().command({ create: dbName });
            db = mongoose.connection.useDb(dbName);
            console.log(`Successfully Created and connected to database: \'${dbName}\'`);
        }

        return db;
    } catch (e) {
        console.error('MongoDB connection error: ', e);
        throw e;
    }
}

export default connectDB;