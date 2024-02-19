"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const factureModel_1 = require("../models/factureModel");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: process.env.USER || 'root',
    password: process.env.MDP || '',
    database: process.env.BDD || 'PDF',
    logging: false,
    models: [factureModel_1.Facture]
});
