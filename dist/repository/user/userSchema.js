"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class userSchema extends mongoose_1.Schema {
    constructor(collection) {
        const user = Object.assign({
            id: {
                required: true,
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
            isActive: {
                default: true,
                required: true,
                type: Boolean
            }
        });
        super(user, collection);
    }
}
exports.default = userSchema;
//# sourceMappingURL=userSchema.js.map