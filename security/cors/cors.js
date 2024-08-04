"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.policy = void 0;
const cors_1 = __importDefault(require("cors"));
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
const policy = (0, cors_1.default)({
    origin: ["http://localhost:5500", "https://pralalogistica.com.br"],
});
exports.policy = policy;
