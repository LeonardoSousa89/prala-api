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
const handleError_1 = __importDefault(require("../interface/error/handleError"));
const err = new handleError_1.default();
class MailController {
    constructor(services) {
        this.services = services;
    }
    sendMail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = Object.assign({}, req.body);
            try {
                err.exceptionFieldIsEmpty(data.companyOrName, "company or name can't be empty");
                err.exceptionFieldIsEmpty(data.email, "email can't be empty");
                err.exceptionFieldIsEmpty(data.message, "message can't be empty");
                err.exceptionFieldIsEmpty(data.phoneNumber, "phoneNumber can't be empty");
                err.exceptionFieldNullOrUndefined(data.companyOrName, "company or name is undefined or null");
                err.exceptionFieldNullOrUndefined(data.email, "email is undefined or null");
                err.exceptionFieldNullOrUndefined(data.message, "message is undefined or null");
                err.exceptionFieldNullOrUndefined(data.phoneNumber, "phoneNumber is undefined or null");
            }
            catch (e) {
                return res.status(400).json({ error: e });
            }
            try {
                yield this.services.sendMail({
                    companyOrName: data.companyOrName,
                    email: data.email,
                    message: data.message,
                    phoneNumber: data.phoneNumber,
                });
                return res.status(200).json({
                    msg: "Email sended",
                });
            }
            catch (e) {
                return res.status(500).json({
                    error: "i am sorry, there is an error with server",
                    e
                });
            }
        });
    }
}
exports.default = MailController;
