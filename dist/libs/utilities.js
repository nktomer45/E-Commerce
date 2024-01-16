"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaTranform = void 0;
const schemaTranform = (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
};
exports.schemaTranform = schemaTranform;
//# sourceMappingURL=utilities.js.map