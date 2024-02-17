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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFacture = exports.updateFacture = exports.createPDF = exports.getAllFacture = exports.getFacture = void 0;
const factureModel_1 = require("../models/factureModel");
const getFacture = (req, res, __next) => __awaiter(void 0, void 0, void 0, function* () {
    const facture = yield factureModel_1.Facture.findOne({
        where: { id: req.params.id },
    });
    return res.status(200).json({ message: "Facture fetched successfully", data: facture });
});
exports.getFacture = getFacture;
const getAllFacture = (req, res, __next) => __awaiter(void 0, void 0, void 0, function* () {
    const facture = yield factureModel_1.Facture.findOne({
        where: { id: req.params.id },
    });
    return res.status(200).json({ message: "Facture fetched successfully", data: facture });
});
exports.getAllFacture = getAllFacture;
const createPDF = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const PDF = yield factureModel_1.Facture.create(Object.assign({}, req.body));
    return res.status(201).json({ message: "new pdf created successfully", data: PDF }).end();
});
exports.createPDF = createPDF;
const updateFacture = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let updatedfacture = yield factureModel_1.Facture.findOne({
        where: { id },
    });
    if (updatedfacture != null) {
        yield factureModel_1.Facture.update(Object.assign({}, req.body), { where: { id } });
        if (req.body.id != undefined && req.body.id != req.params.id) {
            id = req.body.id;
            updatedfacture = yield factureModel_1.Facture.findOne({ where: { id } });
        }
        return res.status(200).json({ message: "facture updated successfully", data: updatedfacture });
    }
    else {
        return res.status(404);
    }
});
exports.updateFacture = updateFacture;
const deleteFacture = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    yield factureModel_1.Facture.destroy({ where: { id } });
    return res.status(200).end();
});
exports.deleteFacture = deleteFacture;
