import express from "express";
const cartRoutes = express.Router();
import { adminVerifyToken } from "../../helpers/admin.token";

import {
    getAllCart
} from "../../controller/admin/cart.controller";

// GET ALL CART
cartRoutes.get('/get-All-Cart', adminVerifyToken , getAllCart);

export default cartRoutes;
