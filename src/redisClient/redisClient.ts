import Redis, { RedisKey, RedisOptions } from 'ioredis';
import config from '../config/configuration';

class RedisClient{
   public static getInstance():RedisClient {
     if(!RedisClient.instance){
        RedisClient.instance = new RedisClient(config.redisOptions);
     }
     return RedisClient.instance
   }
   private static instance :RedisClient;
   public client;
  
    constructor(options:any){ 
         this.client= new Redis(options);
    }

    public connectRedis() {
         this.client.on("reconnecting",()=>{
            const message = `|| Trying to re-connecting redis-server please wait ...... ! ||`;
            console.log(message);
         })
         this.client.on('connect',()=>{
            const message = `|| Redis connected successfully ||`;
            console.log(message);
         })
         this.client.on('end',()=>{
            const message = `|| Redis connection ended unexpectedly...! ||`;
            console.log(message)
         })
         this.client.on('error',(err:any)=>{
            const error = `|| Error connecting redis...! ||`;
            console.log(error,err);  
         })
    }
    public get(key:any){
        return this.client.get(key)
    }

    public set(key:any,value: any,duration: any){
        return this.client.set(key,value,"EX", duration)
    }

    public mget(keys:any){
        return this.client.mget(keys)
    }
    public del (key:any){
        return this.client.del(key)
    }
}


export default RedisClient.getInstance()