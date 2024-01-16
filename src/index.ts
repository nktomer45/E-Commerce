import Server from "./server";
import  config  from "./config/configuration";
import redisClient from "./redisClient/redisClient";
const server =new Server(config);
redisClient.connectRedis()
server.bootstrap()
server.run()



