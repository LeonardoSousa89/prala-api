"use strict";
// https://dev.to/oieduardorabelo/um-guia-sobre-injecao-e-inversao-de-dependencias-em-node-js-e-typescript-1bod
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
const mail_1 = __importDefault(require("../mail/mail"));
class MailService {
    constructor() {
        this.Email = new mail_1.default();
    }
    sendMail(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Email.sendMail(payload);
        });
    }
}
exports.default = MailService;
