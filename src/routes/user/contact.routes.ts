
import express from "express";
const contactRoutes = express.Router();
import { userVerifyToken } from "../../helpers/user.token";

import {
    addToContact,
    getAllContact,
    getContact
    
    // updateCart,
    // deleteCart
} from "../../controller/user/contact.controller";

// ADD CART
contactRoutes.post('/add-Contact', userVerifyToken, addToContact);

// GET ALL CART
contactRoutes.get('/get-All-Contact', userVerifyToken, getAllContact);

// // // GET SPECIFIC CART
contactRoutes.get('/get-Cart', userVerifyToken, getContact);

// // // UPDATE CART
// cartRoutes.put('/update-cart', userVerifyToken, updateCart);

// // // DELETE CART
// cartRoutes.delete('/delete-Cart', userVerifyToken, deleteCart);

export default contactRoutes;
