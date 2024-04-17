import express from 'express';
import adminRoutes from './admin.routes';
import productRoutes from './product.routes';
import cartRoutes from './cart.routes';


const adminsRoutes = express.Router();

adminsRoutes.use('/admin', adminRoutes);
adminsRoutes.use('/product', productRoutes);
adminsRoutes.use('/cart', cartRoutes);



export default adminsRoutes;