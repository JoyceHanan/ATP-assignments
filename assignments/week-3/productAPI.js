import exp from 'express'
export const prodApp=exp.Router()
import {ProductModel} from '../models/productmodel.js'
import { verifyToken } from '../middleware/verifyToken.js'
// REST API with below operations
//      a. Create product
//      b. Read all products
//      c. Read a product by productId
//      d. Update a product by productId
//      e. Delete a product by productId
prodApp.post("/prod",async (req,res)=>{
    const newProd=req.body
    const newProdDoc=new ProductModel(newProd)
    await newProdDoc.save()
    res.status(201).json({message:"product created"})
    
})
prodApp.get("/prod",verifyToken,async (req,res)=>{
    let list=await ProductModel.find()
    res.status(200).json({message:"products",payload:list}) 
})
prodApp.get("/prod/:id",verifyToken,async(req,res)=>{
    const pid=req.params.id
    const obj=await ProductModel.findOne({productId:pid})
    if(!obj){
        return res.status(404).json({message:"product not found"})
    }
      res.status(200).json({message:"product by id",payload:obj})
})
prodApp.put("/prod/:id",verifyToken,async(req,res)=>{
     const mod=req.body
      const pid = req.params.id
      const updatedProduct=await ProductModel.findOneAndUpdate({productId:pid},{$set:{...mod}},{new:true})
      res.status(200).json({message:"product updated",payload:updatedProduct})
})
prodApp.delete("/prod/:id",verifyToken,async(req,res)=>{
    const pid =req.params.id
    const delProduct=await ProductModel.findOneAndDelete({productId:pid})
    if(!delProduct){
       return res.status(404).json({message:"product not found"})   
    }
    res.status(200).json({message:"product deleted",payload:delProduct})
})