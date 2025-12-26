import express from "express"

import Todo from "../models/Todo.js"

const router = express.Router();

router.post("/", async (req, res)=>{
    try{
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json(todo);
    }catch (err) {
        res.status(400).json({error: err.message});
    }
});
router.get('/',async (req, res)=>{
    try{
        const todos = await Todo.find();
        res.json(todos);
    } catch (err){
        res.status(500).json({ error: err.message});
    }
    
});
router.put('/:id',async (req, res)=>{
    try{
        const updatedTodo = await
        Todo.findByIdAndUpdate(req.params.id,req.body , { new:
            true})
            res.json(updatedTodo);
        }catch (err) {
            res.status(400).json({error: err.message });
        }
});
router.delete('/:id',async (req,res)=> {
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.json({message:'Todo delete'});
    } catch (err) {
        res.status(500).json({error: err.message})
    }
});

export default router;


