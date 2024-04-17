import express from "express";
const productRoutes = express.Router();
import { adminVerifyToken } from "../../helpers/admin.token";



const {
    addNewProduct,
    getAllProduct,
    productFilter,
    getProduct,
    updateProduct,
    // searchProduct,
    deleteProduct
} = require('../../controller/admin/product.controller');

// ADD PRODUCT
productRoutes.post('/add-Product', adminVerifyToken, addNewProduct);

// // GET ALL PRODUCT
productRoutes.get('/get-All-Product', adminVerifyToken, getAllProduct);

// // PRODUCT FILTER
productRoutes.get('/filter-Product', adminVerifyToken, productFilter);

// productRoutes.get('/search-Product', adminVerifyToken, searchProduct);


// // GET SPECIFIC PRODUCT
productRoutes.get('/get-Product', adminVerifyToken, getProduct);

// // UPDATE PRODUCT
productRoutes.put('/update-Product', adminVerifyToken, updateProduct);

// // DELETE PRODUCT
// productRoutes.delete('/delete-Product', adminVerifyToken , deleteProduct);

export default productRoutes;