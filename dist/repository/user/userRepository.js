"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const mongoose_1 = require("mongoose");
const Helper_1 = require("../../libs/Helper");
class UserRepository extends mongoose_1.Document {
    static generateObjectId() {
        return String(new mongoose_1.default.Types.ObjectId());
    }
    async create(data) {
        try {
            const newModel = new model_1.default({
                ...data,
                createdAt: Helper_1.currentDate,
            });
            await newModel.save();
        }
        catch (error) {
            console.error("Error creating user:", error);
            throw error; // Rethrow the error to be handled by the calling code
        }
    }
}
exports.default = UserRepository;
//# sourceMappingURL=userRepository.js.map