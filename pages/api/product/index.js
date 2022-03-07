
import dbConnect from '../../../lib/mongo'
import product from '../../../models/product'
export default async function handler(req, res) {
    const{method}=req;
    dbConnect()

    if (method ==="GET"){
       try{
       const allproducts = await product.find();
       res.status(200).json(allproducts)
       }
       catch(err){
         res.status(500).json(err);
       }
    }
    if(method==="POST"){
      try{
       const products = await product.create(req.body);
       res.status(201).json(products);
      }catch(err){
        res.status(500).json(err);

      }
    }

  }
  