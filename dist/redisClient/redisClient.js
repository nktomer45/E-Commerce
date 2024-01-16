"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
const configuration_1 = require("../config/configuration");
class RedisClient {
    static getInstance() {
        if (!RedisClient.instance) {
            RedisClient.instance = new RedisClient(configuration_1.default.redisOptions);
        }
        return RedisClient.instance;
    }
    static instance;
    client;
    constructor(options) {
        this.client = new ioredis_1.default(options);
    }
    connectRedis() {
        this.client.on("reconnecting", () => {
            const message = `|| Trying to re-connecting redis-server please wait ...... ! ||`;
            console.log(message);
        });
        this.client.on('connect', () => {
            const message = `|| Redis connected successfully ||`;
            console.log(message);
        });
        this.client.on('end', () => {
            const message = `|| Redis connection ended unexpectedly...! ||`;
            console.log(message);
        });
        this.client.on('error', (err) => {
            const error = `|| Error connecting redis...! ||`;
            console.log(error, err);
        });
    }
    get(key) {
        return this.client.get(key);
    }
    set(key, value, duration) {
        return this.client.set(key, value, "EX", duration);
    }
    mget(keys) {
        return this.client.mget(keys);
    }
    del(key) {
        return this.client.del(key);
    }
}
exports.default = RedisClient.getInstance();
//# sourceMappingURL=redisClient.js.map