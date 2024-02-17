import { Sequelize } from "sequelize-typescript";
import { Facture } from "../models/factureModel";
import dotenv from 'dotenv';
dotenv.config()

export const connection = new Sequelize({
  dialect: "mysql",
  host: "mysql",
  username: process.env.USER || 'root',
  password: process.env.MDP || '',
  database: process.env.BDD || 'PDF',
  logging: false,
  models: [Facture]
})

