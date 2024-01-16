"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Database {
    static open = async ({ mongoUrl }) => {
        try {
            const options = {
                serverSelectionTimeoutMS: 5000,
            };
            await mongoose_1.default.connect(mongoUrl, options);
            console.log("|| Connected  with MongoDB ||");
        }
        catch (err) {
            console.error(`Error connecting to database: ${mongoUrl}`);
            console.error(err.message);
            throw new Error(err.message);
        }
    };
}
exports.default = Database;
//# sourceMappingURL=mongodb.js.map