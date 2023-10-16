import dotenv from "dotenv";

dotenv.config();

import Db from './db.js'

import express from 'express';
import testRoutes from './routes/testRoute.js'

class Server {
    app = express();
    port = process.env.PORT;
    db;
    server;

    setMiddleware(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use((req, res) => {
            res.sendFile(path.join(__dirname, 'public', req.url));
          });
    }
    setAPIRoutes(){
        this.app.use('/',testRoutes)
    }
    async init(){
        this.db = Db;
        const results = await this.db.connect();
        this.setMiddleware();
        this.setAPIRoutes();
    }
    start(){
        return new Promise(res => {
            this.server = this.app.listen(this.port, () => {
                log(`Server started on port ${this.port}`);
                resolve();
            })
        })
    }
}

async function run() {
    try{
        const server = new Server();
        await server.init();
        await server.start();
    }catch(err) {
        console.log('failed to start',err);
    }
}
run();
