"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const routes = (0, express_1.Router)();
routes.post("/create", controller_1.default.create);
exports.default = routes;
//# sourceMappingURL=routes.js.map