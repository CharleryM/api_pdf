import { Express } from "express";
import { factureRouter } from "./facturesRouter";

export function buildRoutes(app: Express) {
    app.use("/facture", factureRouter);
}

