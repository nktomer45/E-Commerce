"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class userSchema extends mongoose_1.Schema {
    constructor(collection) {
        const user = Object.assign({
            id: {
                required: false,
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
                required: false,
                type: Date,
            },
            modifiedAt: {
                // default: ,
                required: false,
                type: Date,
            },
            isActive: {
                // default :true,
                required: true,
                type: Boolean
            },
            avatar: {
                required: false,
                type: String
            }
        });
        super(user, collection);
    }
}
exports.default = userSchema;
//# sourceMappingURL=userSchema.js.map