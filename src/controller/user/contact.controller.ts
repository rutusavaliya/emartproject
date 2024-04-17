
import ContactServices from "../../services/contact.service";
import { Request, Response } from "express";

const contactService = new ContactServices();

declare global {
    namespace Express {
        interface Request {
            contact?: any;
        }
    }
}

export const addToContact = async(req: Request , res: Response) => {
    try {
        let contact = await contactService.getContact({
            user: (req.user as any )._id,
            isDelete: false
        });
        if(contact){
            return res.status(400).json({Message: "contact is Already Exist..."});
        }
        contact = await contactService.addToContact({
            user: (req.user as any )._id,
            ...req.body
        });
        contact.save();
        return res.status(200).json({contact , Message: "Contact Added successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error... ${console.error()}`});
    }
};


export const getAllContact = async(req: Request , res: Response) => {
    try {
        let contact = await contactService.getAllContact({isDelete: false});
        res.status(200).json(contact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

export const getContact = async(req: Request , res: Response) => {
    try {
        let contact = await contactService.getContactById({isDelete: false});
        if(!contact){
            return res.status(404).json({Message:  `contact is Not Found...`})
        }
        res.status(200).json(contact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};
