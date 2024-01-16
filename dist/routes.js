"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userInfo_1 = require("./controllers/userInfo");
const routes = express.Router();
routes.get('/', (req, res, next) => {
    res.status(200).json({ message: "health check" });
});
routes.get('/user', userInfo_1.default.getUserInfo);
routes.post('/user', userInfo_1.default.createUserInfo);
exports.default = routes;
//# sourceMappingURL=routes.js.map