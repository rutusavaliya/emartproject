import wishlistModel from "../model/wishlist.model";

export default class WishlistService{
    //ADD to Wishlist

    addNewWishlist = async(body:any) => {
        return await wishlistModel.create(body);
    }

     // GET ALL Wishlist
     getAllWishlist = async (body: any) => {
        return await wishlistModel.find(body);
    }

    // GET SPECIFIC Wishlist
    getWishlist = async (body: any) => {
        return await wishlistModel.findOne(body);
    }

    // GET SPECIFIC Wishlist BY ID
    getWishlistById = async (body: any) => {
        return await wishlistModel.findById(body);
    }

    // UPDATE Wishlist
    updateWishlist = async (id: string, body: any) => {
        return await wishlistModel.findByIdAndUpdate(id, {$set: body }, { new: true });
    }
}
