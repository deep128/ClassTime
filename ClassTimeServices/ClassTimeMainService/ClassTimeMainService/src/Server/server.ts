import express = require("express");
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import { Controller } from "./controller"
import cors = require("cors");

export class Server {

    private app;

    constructor(private config: any) {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(cookieParser());
        new Controller({
            app: this.app,
            dbModels: config.dbModels
        });
    }

    public StartServer() {
        var server = this.app.listen(process.env.PORT || 3000,()=>{
            console.log(`Listning on http://${server.address().address}:${server.address().port}`);
        });
    }
}