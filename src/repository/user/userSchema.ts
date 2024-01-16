import { Schema } from 'mongoose';

export default class userSchema extends Schema {
    constructor(collection: any) {
        const user = Object.assign({
            id:{
                required:true,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            email: {
                required: true,
                type: String
            },
            password: {
                required: true,
                type: String
            },
            createdAt: {
                default: Date.now(),
                required: true,
                type: Date,
            },
            modifiedAt: {
                // default: ,
                required: false,
                type: Date,
            },
            address: {
                required: false,
                type: String
            },
            isActive:{
                default :true,
                required:true,
                type:Boolean
            }
        })

        super(user, collection)
    }
}