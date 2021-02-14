"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const dev_claim_route_1 = __importDefault(require("./routes/dev-claim.route"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const routes = [
    new dev_claim_route_1.default()
];
validateEnv_1.default();
const app = new app_1.default(routes);
app.listen();
//# sourceMappingURL=server.js.map