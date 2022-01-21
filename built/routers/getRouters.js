"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const queryMiddlewares_1 = require("../middlewares/queryMiddlewares");
const normalTypes_1 = require("../predicators/normalTypes");
const ddb = new aws_sdk_1.default.DynamoDB.DocumentClient({ region: "us-east-1" });
router.get("/part/:pos", queryMiddlewares_1.getEntriesbyPos, (req, res) => {
    const entries = res.locals.entries;
    const letterQuery = req.query.letter;
    const randomNumber = Math.floor(Math.random() * 15);
    if ((0, normalTypes_1.isUndefined)(letterQuery) ||
        !(0, normalTypes_1.isString)(letterQuery) ||
        letterQuery.length > 1) {
        return res.send(entries[randomNumber]);
    }
    else {
        return res.send(entries.filter((entry) => entry.word.includes(letterQuery))[randomNumber]);
    }
});
router.get("/:word", queryMiddlewares_1.getEntriesByWord, (req, res) => {
    res.send(res.locals.entries);
});
router.get("/:word/:pos", queryMiddlewares_1.getEntriesByWord, (req, res) => {
    const entriesByPos = res.locals.entries.filter((entry) => entry.speachType.includes(req.params.pos));
    res.send(entriesByPos);
});
exports.default = router;
//# sourceMappingURL=getRouters.js.map