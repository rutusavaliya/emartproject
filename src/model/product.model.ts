 const mongoose = require('mongoose');

 const productSchema = mongoose.Schema({
    title:{
        type:String,
        unique:true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color:{
        type:String,
        required: true
    },
    sizes:{
        type:String,
        required: true
    },
    category: [{
        type: String,
        required: true
    }],
    isDelete: {
        type: Boolean,
        default: false
    }
 },
 {
    versionKey: false,
    timestamps: true
 });

 const productModel =  mongoose.model('products', productSchema);
export default productModel;

