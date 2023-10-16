import { Router } from "express";

import { getEntries, addEntry } from "../controllers/testController.js";

const router = Router();

router.get('/:count',getEntries)
router.post('/',addEntry);

export default router;