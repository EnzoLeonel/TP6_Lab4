import { Router } from "express";
import * as instrumento from "../controllers/InstrumentoCtrl";

const router = Router();

router.get('/api/instrumentos',instrumento.getInstrumentos);
router.get('/api/instrumentos/:id', instrumento.getInstrumentoXID);

router.post('/api/instrumentos/insert', instrumento.insertInstrumento);

export default router;
