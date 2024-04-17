import WishlistServices from "../../services/wishlist.service";
import { Request, Response } from "express";
const wishlistService = new WishlistServices();

declare global {
  namespace Express {
      interface Request {
          wishlist?: any;
      }
  }
}

export const addNewWishlist = async(req: Request , res: Response) => {
    try {
        let wishlist = await wishlistService.getWishlist({
            product: req.body.product,
            user: (req.user as any )._id,
            isDelete: false,
        });
        if(wishlist){
            return res.status(400).json({Message:  "Favorite is alredy exist" });
         }
         wishlist = await wishlistService.addNewWishlist({...req.body , user:(req.user as any )._id });
         res.status(201).json({ wishlist, Message: "wishlist is Added..." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: "Internal server Error" });
    }
};

export const getAllWishlist = async(req: Request , res: Response) => {
    try {
        let wishlist = await wishlistService.getAllWishlist({ isDelete: false });
         res.status(200).json(wishlist);
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: "Internal server Error" });
    }
};

export const deleteWishlist = async (req: Request,res: Response) => {
    try {
      let wishlist = await wishlistService.getWishlistById(req.query.Id);
      if (!wishlist) {
        return res.status(404).json({ Message: "wishlist is not found" });
      }
      wishlist = await wishlistService.updateWishlist(wishlist._id, {
        isDelete: true,
      });
      res.status(202).json({ wishlist, Message: "wishlist is Deleted..." });
    } catch (error) {
      console.log(error);
      res.status(500).json({ Message: "Internal server Error" });
    }
  };