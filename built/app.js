"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const getRouters_1 = __importDefault(require("./routers/getRouters"));
app.use((0, cors_1.default)());
app.get("/", (_req, res) => {
    res.send("hello");
});
app.use("/get", getRouters_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map