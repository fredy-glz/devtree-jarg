import { Router } from "express";

const router = Router();

/** Autenticación y Registro */
router.post("/auth/register", (req, res) => {
  console.log({ req: req.body });
});

export default router;
