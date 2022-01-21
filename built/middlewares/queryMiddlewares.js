"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntriesbyPos = exports.getEntriesByWord = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const ddb = new aws_sdk_1.default.DynamoDB.DocumentClient({ region: "us-east-1" });
const getEntriesByWord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield ddb
            .query({
            TableName: "dictionary",
            KeyConditionExpression: "#word = :word",
            ExpressionAttributeNames: { "#word": "word" },
            ExpressionAttributeValues: {
                ":word": req.params.word,
            },
        })
            .promise();
        res.locals.entries = items.Items;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ err: err });
    }
});
exports.getEntriesByWord = getEntriesByWord;
const getEntriesbyPos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entries = yield ddb
            .scan({
            TableName: "dictionary",
            FilterExpression: "contains(speachType, :pos)",
            ExpressionAttributeValues: { ":pos": req.params.pos },
        })
            .promise();
        if (entries.Items === undefined)
            throw "bad query";
        res.locals.entries = entries.Items;
        next();
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getEntriesbyPos = getEntriesbyPos;
//# sourceMappingURL=queryMiddlewares.js.map