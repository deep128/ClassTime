import { Server } from "./Server/server";
import { DBConnect } from "./database/connect"

const db = new DBConnect;
const dbModels = db.getModels();

const server = new Server({
    port: 3000,
    dbModels
});

server.StartServer();