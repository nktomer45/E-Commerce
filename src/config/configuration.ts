import { config } from "dotenv";
import { IConfig } from "./IConfiguration";
config();
const envVars: NodeJS.ProcessEnv = process.env;

const configuration= Object.freeze({
port :envVars.PORT,
env :envVars.ENV,

redisOptions:{
    host:envVars.REDIS_CONFIG,
    port :envVars.REDIS_PORT
},
mongoUrl:envVars.MONGOURL
})as IConfig


export default configuration