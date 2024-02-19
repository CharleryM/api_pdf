import { Facture } from "../models/factureModel";

const { jsPDF } = require("jspdf"); // will automatically load the node version

export function toPdf(facture: Facture | null) {
    const doc = new jsPDF();
    // let i: number = 10
    if (!facture) {
        return null
    }
    // for (let [key, value] of Object.entries(facture)) {
    //     i += 10
    //     doc.text(`${key} : ${value}`, 10, i);
    // }

        doc.text('titre : '+ facture.title, 10, 10);
        doc.text('cliant : '+facture.client, 10, 20);
        doc.text('prestataire : '+facture.owner, 10, 30);
        doc.text('somme : '+facture.sold, 10, 40);

    doc.save(facture.title+"-"+facture.owner+".pdf"); 
}