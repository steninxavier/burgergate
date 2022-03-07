
import dbConnect from '../../../lib/mongo'
import product from '../../../models/product'
export default async function handler(req, res) {
    const{method,
        query:{id}
    }=req;
    dbConnect();

    if (method ==="GET"){
       try{
       const productl = await product.findById(id);
       res.status(200).json(productl)
       }
       catch(err){
         res.status(500).json(err);
       }
    }
    if(method==="PUT"){
      try{
       const products = await product.create(req.body);
       res.status(201).json(products);
      }catch(err){
        res.status(500).json(err);

      }
    }
    if(method==="DELETE"){
        try{
         const products = await product.create(req.body);
         res.status(201).json(products);
        }catch(err){
          res.status(500).json(err);
  
        }
      }

  }
  