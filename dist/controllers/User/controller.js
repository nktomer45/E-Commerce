"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = require("../../repository/user/userRepository");
class UserController {
    static instance;
    userRepository;
    static getInstance() {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
    constructor() {
        this.userRepository = new userRepository_1.default();
    }
    create(req, res, next) {
        try {
            const data = req.body;
            console.log(req);
            res.status(200).json({ message: " user now created", data });
        }
        catch (err) {
            console.info("User Controller checkPlanNameDuplication ERROR', err");
        }
    }
}
exports.default = UserController.getInstance();
//# sourceMappingURL=controller.js.map