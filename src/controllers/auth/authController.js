import dotenv from 'dotenv';
import { default as PsicologoRepository } from '../../models/psicologos/psicologosModel.js';
dotenv.config();

const dbName = process.env.JWT_SECRET;
