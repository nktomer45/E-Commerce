"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
class UserRepository extends mongoose_1.Document {
    static generateObjectId() {
        return String(new mongoose.Types.ObjectId());
    }
}
exports.default = UserRepository;
//# sourceMappingURL=userRepository.js.map