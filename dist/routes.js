"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./controllers/User/routes");
const routes = express.Router();
routes.get("/", (req, res, next) => {
    res.status(200).json({ message: "health check" });
});
routes.use("/user", routes_1.default);
// routes.get('/user',userInfo.getUserInfo);
// routes.post('/user',userInfo.createUserInfo);
exports.default = routes;
//# sourceMappingURL=routes.js.map