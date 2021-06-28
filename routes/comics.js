import { Router } from "express";
import * as controllers from "../controllers/comics.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/comics", controllers.getAllComics);
router.get("/comics/:id", controllers.getComic);
router.post("/comics", restrict, controllers.createComic);
router.put("/comics/:id", restrict, controllers.updateComic);
router.delete("/comics/:id", restrict, controllers.deleteComic);
// router.post("/comics", controllers.createComic);
// router.put("/comics/:id", controllers.updateComic);
// router.delete("/comics/:id", controllers.deleteComic);

export default router;
