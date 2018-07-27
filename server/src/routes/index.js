import { Router } from 'express';
import movieRouter from './movies';
import actorRouter from "./actors";
import referenceRouter from "./movieReferences";
let router = Router();

router.use('/movies', movieRouter);
router.use("/actors", actorRouter);
router.use("/references", referenceRouter);

export default router;