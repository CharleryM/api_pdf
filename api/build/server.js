"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const factureModel_1 = require("./models/factureModel");
const buildRoutes_1 = require("./routes/buildRoutes");
require('dotenv').config();
let cors = require("cors");
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cors({ origin: "http://localhost:4200" }));
(0, buildRoutes_1.buildRoutes)(app);
database_1.connection.addModels([factureModel_1.Facture]);
database_1.connection.sync()
    .then(() => {
    console.log("Database successfully connected");
})
    .catch((err) => {
    console.log("Error", err);
});
const server = app.listen(port, function () {
    console.log(`Listening on ${port}`);
});
exports.server = server;
app.use('/', (res, req) => {
    return ('hello world');
});
