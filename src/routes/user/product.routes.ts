import express from "express";
const productRoutes = express.Router();
import { userVerifyToken } from "../../helpers/user.token";

import {
    getAllProduct,
    getProduct
}  from "../../controller/user/product.controller";

// GET ALL PRODUCT
productRoutes.get('/get-All-Product', userVerifyToken , getAllProduct);

// GET SPECIFIC PRODUCT
productRoutes.get('/get-Product', userVerifyToken , getProduct);

export default productRoutes;