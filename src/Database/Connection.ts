import mongoose from "mongoose";

const dbHost = process.env.VITE_DB_HOST
const dbPort = process.env.VITE_DB_PORT
const dbName = process.env.VITE_DB_NAME || 'task_manager'

const connect = async() => {
    try {
        let db: mongoose.Connection;
        const uri = `mongodb://${dbHost}:${dbPort}`;
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

export default connect;