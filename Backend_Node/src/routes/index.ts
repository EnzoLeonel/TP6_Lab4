import { Router } from "express";
import * as instrumento from "../controllers/Instrumento";

const router = Router();

router.get('/api/instrumentos',instrumento.getInstrumentos);

export default router;
