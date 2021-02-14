"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dev_claim_controller_1 = __importDefault(require("../controllers/dev-claim.controller"));
class DevClaimRoute {
    constructor() {
        this.path = '/';
        this.router = express_1.Router();
        this.controller = new dev_claim_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/', this.controller.devclaim);
    }
}
exports.default = DevClaimRoute;
//# sourceMappingURL=dev-claim.route.js.map