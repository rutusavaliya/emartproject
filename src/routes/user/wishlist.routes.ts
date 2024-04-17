import express from "express";
const wishlistRoutes = express.Router();
import {userVerifyToken} from "../../helpers/user.token";

import { addNewWishlist , getAllWishlist , deleteWishlist} from "../../controller/user/wishlist.controller";

// ADD NEW FAVORITE
wishlistRoutes.post('/add-New-Wishlist' , userVerifyToken ,  addNewWishlist);

// GET ALL FAVORITE
wishlistRoutes.get('/get-All-Wishlist', userVerifyToken, getAllWishlist);

// // DELETE FAVORITE
wishlistRoutes.delete('/delete-Wishlist' , userVerifyToken , deleteWishlist);

export default wishlistRoutes;