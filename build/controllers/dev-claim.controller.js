"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const claims_1 = __importDefault(require("../claims/claims"));
class DevClaimController {
    constructor() {
        this.devclaim = (req, res, next) => {
            const claim = claims_1.default[Math.floor(Math.random()) * claims_1.default.length];
            res.render('index.ejs', { claim });
        };
    }
}
exports.default = DevClaimController;
//# sourceMappingURL=dev-claim.controller.js.map