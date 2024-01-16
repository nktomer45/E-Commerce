"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const mongodb_1 = require("./libs/MiddleWare/mongodb");
class Server {
    config;
    app;
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    initJsonParser() {
        this.app.use(bodyParser.json({ limit: '100mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
    }
    setupRoutes() {
        this.app.use(routes_1.default);
    }
    async dbConnect() {
        const { mongoUrl } = this.config;
        await mongodb_1.default.open({ mongoUrl });
    }
    bootstrap() {
        this.dbConnect();
        this.initJsonParser();
        this.setupRoutes();
        return;
    }
    run() {
        const { port, env } = this.config;
        this.app.listen(port, () => {
            const message = `|| App is running at port '${port}' in '${env}' mode ||`;
            console.log(message);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map