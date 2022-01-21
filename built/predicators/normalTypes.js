"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.isUndefined = void 0;
const isUndefined = (value) => {
    if (value === undefined || value === null) {
        return true;
    }
    return false;
};
exports.isUndefined = isUndefined;
const isString = (value) => {
    if (typeof value === "string" || value instanceof String) {
        return true;
    }
    return false;
};
exports.isString = isString;
//# sourceMappingURL=normalTypes.js.map