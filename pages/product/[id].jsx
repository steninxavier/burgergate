import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Product.module.css'
import { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import { NEXT_URL } from '../../config'
const Product = ({burger}) => {
    const [size, setSize] = useState(0);
    const[price,setPrice] =useState(burger.prices[0]);
    const[extras,setExtras] = useState([]);
    const [quantity,setQuantity] = useState(1)
    const Dispatch= useDispatch();

    const changePrice =(number)=>{
      setPrice(price+ number)
    }
    const handleSize =(sizeIndex)=>{
      const difference = burger.prices[sizeIndex] - burger.prices[size]
      setSize(sizeIndex);
      changePrice(difference)
    }

  const handleChange =(e,option)=>{
    const checked = e.target.checked;
    if(checked){
      changePrice(option.price);
      setExtras((prev)=>[...prev,option]);
    }else{
      changePrice(-option.price)
      setExtras(extras.filter((extras)=> extras._id !== option._id));
    }
  };
  const handleClick=()=>{
   Dispatch(addProduct({...burger,extras,price,quantity}))
  }
  
  return (
    <div className={styles.container}>
<div className={styles.left}>
    <div className={styles.imgcontainer}>
        <Image src={burger.img} layout='fill' objectFit='contain' />
    </div>
</div>
<div className={styles.right}><h1 className={styles.title}>{burger.title}</h1>
        <span className={styles.price}>€{price}</span>
        <p className={styles.desc}>{burger.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/Images/burger1.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/Images/burger1.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/Images/burger1.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {burger.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>

  );
};
export const getServerSideProps = async({params})=>{
  const res =await axios.get(`${NEXT_URL}/api/product/${params.id}`);
  return{
    props:{
      burger: res.data,
    },
  };
};

export default Product;