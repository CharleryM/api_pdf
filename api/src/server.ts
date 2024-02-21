import express, { Request, Response } from 'express';
import { connection } from './config/database'
import { Facture } from './models/factureModel';
import { buildRoutes } from './routes/buildRoutes';

require('dotenv').config();
let cors = require("cors");

const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.set('view engine', 'ejs'); 
app.set('views', './views');


buildRoutes(app);

connection.addModels([Facture]);

connection.sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err: any) => {
    console.log("Error", err);
  });

const server = app.listen(port, function () {
  console.log(`Listening on ${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.render('index'); 
});
export { app, server }
