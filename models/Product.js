import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: false
    },
    desc:{
        type:String
    },
    image:{
        type:String
    }
    },{timestamps: true })

const Product = mongoose.model('product', productSchema);

export default Product;