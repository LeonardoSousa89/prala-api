"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const express_1 = require("./config/express/express");
const mailRoutes_1 = require("./routes/mailRoutes");
const environment_1 = require("./config/environment/environment");
const ip_1 = require("./config/network/ip");
const cors_1 = require("./security/cors/cors");
// https://pt.stackoverflow.com/questions/247654/m%C3%B3dulo-para-node-js-que-captura-informa%C3%A7%C3%B5es-do-sistema-operacional-e-do-computad
const os_1 = __importDefault(require("os"));
environment_1.environment.config();
const app = (0, express_1.express)();
app.use(express_1.express.json());
app.use(express_1.express.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("combined"));
app.use(cors_1.policy);
app.use("/", mailRoutes_1.mailRoute);
app.listen(process.env.PORT, () => {
    try {
        console.log("ELIMINAR AS INFORMAÇÕES APÓS OS TESTES E RESOLUÇÃO DAS PENDÊNCIAS");
        console.log("PORT:", process.env.PORT);
        console.log("MAIL SERVICE:", process.env.MAIL_SERVICE);
        console.log("MAIL USER:", process.env.MAIL_USER);
        console.log("MAIL PASS:", process.env.MAIL_PASS);
        console.log("MAIL RECIPIENT:", process.env.MAIL_RECIPIENT);
        console.log("ELIMINAR AS INFORMAÇÕES APÓS OS TESTES E RESOLUÇÃO DAS PENDÊNCIAS");
        console.log({
            server_info: {
                connection: {
                    status: "online",
                    port: process.env.PORT,
                    address: JSON.stringify((0, ip_1.getIPAddresses)(os_1.default)),
                },
                machine: {
                    so: os_1.default.type(),
                    version: os_1.default.release(),
                    kernel: os_1.default.release(),
                    user: JSON.stringify(os_1.default.userInfo().username),
                    host: os_1.default.hostname(),
                    path: os_1.default.homedir(),
                    arcq: JSON.stringify(os_1.default.arch()),
                    platform: process.platform,
                    cpu: JSON.stringify(os_1.default.cpus()[0]),
                    memory: JSON.stringify(os_1.default.totalmem()),
                    memory_free: JSON.stringify(os_1.default.freemem()),
                    time: Date(),
                },
            },
        });
    }
    catch (e) {
        console.table({
            error: e,
        });
    }
});
