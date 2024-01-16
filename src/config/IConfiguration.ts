export interface IConfig {
    port :string;
    env:string;
    redisOptions:{
        host:string;
        port :string;
    },
    mongoUrl:string;
}