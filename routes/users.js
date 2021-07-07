import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/login", controllers.signIn);
router.get("/verify", controllers.verify);
router.post('/change-password', controllers.changePassword)

router.get('/users/:id/wishlist', controllers.getUserWishlist)
router.put('/users/:id/wishlist/:comicId', controllers.addComicToWishlist)
// changed the route to "update-wishlist" also in the services file
router.delete('/users/:id/wishlist/:comicId', controllers.removeComicFromWishlist)
// router.get('/users/:id/wishlist/:comicId', controllers.getUserComic)
// router.post('/users/:id/comics', controllers.createUserComic)
// router.delete('/users/:id/comics/:comicId', controllers.deleteUserComic)


export default router;
