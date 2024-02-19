"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRoutes = void 0;
const facturesRouter_1 = require("./facturesRouter");
function buildRoutes(app) {
    app.use("/facture", facturesRouter_1.factureRouter);
}
exports.buildRoutes = buildRoutes;
