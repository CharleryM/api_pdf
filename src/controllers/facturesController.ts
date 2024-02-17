import { RequestHandler } from "express";
import { Facture } from "../models/factureModel";
import { jsPDF } from "jspdf";

export const getFacture: RequestHandler = async (req, res, __next) => {
  const facture = await Facture.findOne({
    where: { id: req.params.id },
  });
    return res.status(200).json(facture).end();
};

export const getAllFacture: RequestHandler = async (req, res, __next) => {
    const facture = await Facture.findAll();
    return res.status(200).json(facture).end();
};

export const createPDF: RequestHandler = async (req, res, next) => {
    const PDF = await Facture.create({ ...req.body });
    return res.status(201).end();
};

export const updateFacture: RequestHandler = async (req, res, next) => {
    let id = req.params.id;
    let updatedfacture: Facture | null = await Facture.findOne({
        where: { id },
    });

    if (updatedfacture != null) {
        await Facture.update({ ...req.body }, { where: { id } });
        if (req.body.id != undefined && req.body.id != req.params.id) {
            id = req.body.id;
            updatedfacture = await Facture.findOne({ where: { id } });
        }
        return res.status(200).json({ message: "facture updated successfully", data: updatedfacture }).end();
    } else {
        return res.status(404);
    }
};

export const deleteFacture: RequestHandler = async (req, res, next) => {
    let id = req.params.id;

    await Facture.destroy({ where: { id } });

    return res.status(200).end();
};
