"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.policy = void 0;
const cors_1 = __importDefault(require("cors"));
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
const policy = (0, cors_1.default)({
  origin: [
    "https://pralalogistica.com.br",
    "http://pralalogistica.com.br",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
  ],
});
exports.policy = policy;
