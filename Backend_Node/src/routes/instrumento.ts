import { Router } from "express";
import * as instrumento from "../controllers/InstrumentoCtrl";

const router = Router();

router.get('/api/instrumentos',instrumento.getInstrumentos);
router.get('/api/instrumentos/:id', instrumento.getInstrumentoXID);

export default router;
