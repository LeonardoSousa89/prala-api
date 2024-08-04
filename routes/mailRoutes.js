"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailRoute = void 0;
const mailControllers_1 = __importDefault(require("../controllers/mailControllers"));
const mailService_1 = __importDefault(require("../services/mailService"));
const express_1 = require("../config/express/express");
const mailRoute = express_1.express.Router();
exports.mailRoute = mailRoute;
mailRoute.route("/mail").post((req, res) => {
    new mailControllers_1.default(new mailService_1.default()).sendMail(req, res);
});
