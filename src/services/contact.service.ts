import contactModel from "../model/contact.model";

export default class ContactService {
    // ADD TO CART
    addToContact = async (body: any) => {
        return await contactModel.create(body);
    }

    // GET ALL CART
    getAllContact = async (body: any) => {
        return await contactModel.find(body);
    }

    // GET SPECIFIC CART
    getContact = async (body: any) => {
        return await contactModel.findOne(body);
    }

    // GET SPECIFIC CART BY ID
    getContactById = async (body: any) => {
        return await contactModel.findById(body);
    }

    // UPDATE CART
    updateContact = async (id: string, body: any) => {
        return await contactModel.findByIdAndUpdate(id, {$set: body }, { new: true });
    }

    // DELETE CART
    deleteContact = async (id: string) => {
        return await contactModel.findByIdAndDelete(id);
    }

     //  UPDATE MANY 
     updateMany = async (body:any) => {
        return await contactModel.updateMany(body , {$set: body}, {new: true});
    }
}
