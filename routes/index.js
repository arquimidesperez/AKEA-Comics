import { Router } from "express";
import comicsRoutes from "./comics.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", comicsRoutes);
router.use("/", usersRoutes);

export default router;
