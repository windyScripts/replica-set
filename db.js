import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Database {
    constructor(database = `mongodb://${DB_NAME}:${DB_PASSWORD}@${env.DB_Entries.join(',')}/replicaTest`
        ){
        this.connectionString = database;
    }
    async connect(){
        await mongoose.connect(this.connectionString);
    }
}

const Db = new Database();



export default Db;