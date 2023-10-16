import mongoose from "mongoose";


class Database {
    constructor(database = `mongodb://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_ENTRIES}/replicaTest`
        ){
        this.connectionString = database;
    }
    async connect(){
        await mongoose.connect(this.connectionString);
    }
}

const Db = new Database();



export default Db;