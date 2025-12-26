import express from "express"

import Product from "../models/Product.js";

const router = express.Router();

router.post("/", async (req, res)=>{
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    }catch (err) {
        res.status(400).json({error: err.message});
    }
});

router.get('/',async (req, res)=>{
    try{
        const product = await Product.find();
        res.json(product);
    } catch (err){
        res.status(500).json({ error: err.message});
    }
    
});
router.put('/:id',async (req, res)=>{
    try{
        const updatedProduct = await
        Product.findByIdAndUpdate(req.params.id,req.body , { new:
            true})
            res.json(updatedProduct);
        }catch (err) {
            res.status(400).json({error: err.message });
        }
});
router.delete('/:id',async (req,res)=> {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.json({message:'Product delete'});
    } catch (err) {
        res.status(500).json({error: err.message})
    }
});

export default router;