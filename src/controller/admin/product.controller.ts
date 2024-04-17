import { Request, Response } from "express";
import ProductService from "../../services/product.service";
const productService = new ProductService();

declare global {
    namespace Express {
        interface Request {
            product?: any;
        }
    }
}

//ADD New Product

export const addNewProduct = async(req: Request , res: Response) => {
    try {
        let product : object | null = await productService.getProduct({title: req.body.title , isDelete: false});
        if(product){
            return res.status(400).json({Message: `Product Is Already Exist..`});
        }
        product = await productService.addNewProduct({...req.body});
        res.status(201).json({product, message: `Product Added Successfully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

export const getAllProduct = async(req: Request , res: Response) => {
     try {
        let products = await productService.getAllProduct({isDelete: false});
        // let categoryWise =
        // query.category && query.category !== ""
        //   ? [
        //       {
        //         $match: {
        //           category: {
        //             $regex: query.category.trim().replace(/\s+/g, " "),
        //             $options: "i",
        //           },
        //         },
        //       },
        //     ]
        //   : [];

        res.status(200).json(products);
     } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
     }
};

export const getProduct = async(req: Request , res: Response) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product){
            return res.status (404).json ({message : `Product is Not Found...`});
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

export const updateProduct = async(req: Request , res: Response) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product){
            return res.status(404).json({ message: `Product is not found..` });
        }
        product = await productService.updateProduct(product._id , {...req.body});
        res.status(202).json({product, message: `Product updated successfully.`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

export const deleteProduct = async(req: Request , res: Response) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product){
            return res.status(404).json({ message: `Product is not found..` });
        }
        product = await productService.updateProduct(product._id , {isDelete: true});
        res.status(202).json({product, message: `Product Deleted successfully.`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};


export const productFilter = async (req: Request, res: Response) => {
    try {
      const filters: any = {};
      if (req.query.category) filters.category = req.query.category;
      if (req.query.color) filters.color = req.query.color;
      if (req.query.size) filters.size = req.query.size;
  
      const products = await productService.getAllProduct(filters);
      res.json(products);
    } 
    catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

//   export const searchProduct = async(req: Request , res: Response) => {
//     try {
//         const searchQuery = req.query.q;
//         const products = await productService.getAllProduct({ $text: { $search: searchQuery } });
//         res.json(products);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

