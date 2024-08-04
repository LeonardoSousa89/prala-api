"use strict";
// https://nodemailer.com/about/
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
const nodemailer_1 = __importDefault(require("nodemailer"));
const environment_1 = require("../config/environment/environment");
const view_1 = require("../view/view");
environment_1.environment.config();
class Mail {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
    }
    sendMail(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.transporter.sendMail({
                from: process.env.MAIL_USER, // support email (tecnologia@pralalogistica.com.br)
                to: process.env.MAIL_RECIPIENT, // sac or operational email (comercial@pralalogistica.com.br)
                subject: `Mensagem via web site de: ${payload.companyOrName}`,
                html: (0, view_1.template)(payload),
            });
        });
    }
}
exports.default = Mail;
