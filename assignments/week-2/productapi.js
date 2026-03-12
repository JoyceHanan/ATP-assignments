//create mini express app
import exp from 'express'
export const productApp = exp.Router()

//product array
let product = []

//read all products
productApp.get('/product', (req,res)=>{
    res.json({message:"all products", payload:product})
})

//create product 
productApp.post('/product',(req,res)=>{
    const newp = req.body
    product.push(newp)
    res.json({message:"created new product"})
})

//read product by brand
productApp.get('/product/:brand',(req,res)=>{
    let brandurl = req.params.brand
    let prod = product.find(obj => obj.brand === brandurl)
    if(prod === undefined){
        return res.json({message:"product not found"})
    }
    res.json({message:"product with brand", payload:prod})
})

//update product
productApp.put('/product',(req,res)=>{
    let modified = req.body
    let index = product.findIndex(obj => obj.id == modified.id)
    if(index === -1){
        return res.json({message:"not found"})
    }
    product.splice(index,1,modified)
    res.json({message:"updated"})
})
//delete product
productApp.delete('/product/:id',(req,res)=>{
    let idurl = Number(req.params.id)
    let p = product.findIndex(obj => obj.id === idurl)
    if(p === -1){
        return res.json({message:"not found"})
    }
    product.splice(p,1)
    res.json({message:"deleted"})
})