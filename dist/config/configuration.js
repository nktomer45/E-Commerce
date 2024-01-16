"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const envVars = process.env;
const configuration = Object.freeze({
    port: envVars.PORT,
    env: envVars.ENV,
    redisOptions: {
        host: envVars.REDIS_CONFIG,
        port: envVars.REDIS_PORT
    },
    mongoUrl: envVars.MONGOURL
});
exports.default = configuration;
//# sourceMappingURL=configuration.js.map