"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("./userSchema");
const utilities_1 = require("../../libs/utilities");
const userSchema = new userSchema_1.default({
    collection: "userInfo",
    toJSON: {
        transfrom: (doc, ret) => (0, utilities_1.schemaTranform)(doc, ret),
        virtuals: true
    },
    toObject: {
        transfrom: (doc, ret) => (0, utilities_1.schemaTranform)(doc, ret),
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
const userModelDetail = {
    collectionName: 'userInfo',
    modelName: "userInfoSchema",
    schema: userSchema,
};
exports.default = userModelDetail;
//# sourceMappingURL=model.js.map