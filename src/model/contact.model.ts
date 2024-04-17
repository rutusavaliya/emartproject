const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type:String 
    },
    email: {
        type:String
    },
    phone: {
        type:String
    },
    message: {
        type:String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},{
    
    versionKey: false,
    timestamps: true
})
const contactModel = mongoose.model("contact", contactSchema);
export default contactModel