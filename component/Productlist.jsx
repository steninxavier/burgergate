import React from 'react'
import styles from '../styles/Productlist.module.css'
import Productcard from './Productcard'

const Productlist = ({Productlist}) => {
  console.log("productlist");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST BURGER IN TOWN</h1>
      <p className={styles.desc}>
      Juicy, big, loaded with toppings of your choice.The bun should be slightly crunchy on the outside and soft inside. The cheese should be happily melting over the meat.
      </p>
    <div className={styles.wrapper}>
      {Productlist.map((product)=>(
         <Productcard key={product._id} product={product}/>
      )
     
      )}
    </div>
    </div>
  )
}
export default Productlist