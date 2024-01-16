"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema_1 = require("./userSchema");
const utilities_1 = require("../../libs/utilities");
const userSchema = new userSchema_1.default({
    collection: 'userInfo',
    toJSON: {
        transform: (doc, ret) => (0, utilities_1.schemaTranform)(doc, ret),
        virtuals: true
    },
    toObject: {
        transform: (doc, ret) => (0, utilities_1.schemaTranform)(doc, ret),
        virtuals: true
    },
});
userSchema.pre('save', (next) => {
    next();
});
userSchema.index({
    id: 1,
    email: 1,
    isActive: 1,
});
// Create the Mongoose model using mongoose.model
const UserModel = mongoose_1.default.model('userInfo', userSchema);
// Export the Mongoose model
exports.default = UserModel;
//# sourceMappingURL=model.js.map