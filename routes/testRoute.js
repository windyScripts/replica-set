import { Router } from "express";

import { getEntries, addEntry } from "../controllers/testController";

const router = Router();

router.get('/:count',getEntries)
router.post('/',addEntry);