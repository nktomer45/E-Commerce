"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const configuration_1 = require("./config/configuration");
const redisClient_1 = require("./redisClient/redisClient");
const server = new server_1.default(configuration_1.default);
redisClient_1.default.connectRedis();
server.bootstrap();
server.run();
//# sourceMappingURL=index.js.map