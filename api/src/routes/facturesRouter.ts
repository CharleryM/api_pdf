import { Router } from "express";
import * as facturesController from '../controllers/facturesController'

const factureRouter = Router();

factureRouter.post('/add', facturesController.createPDF)
factureRouter.get('/get/:id', facturesController.getFacture);
factureRouter.get('/getAll', facturesController.getAllFacture);
factureRouter.put('/update/:id', facturesController.updateFacture);
factureRouter.delete('/delete/:id', facturesController.deleteFacture);

export { factureRouter }