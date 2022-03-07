import React from 'react'
import styles from '../styles/Productcard.module.css'
import Image from "next/image";
import Link from "next/link"
const Productcard = ({product}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product._id}`} >
      <Image src={product.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>€{product.prices[0]}</span>
      <p className={styles.desc}>
      {product.desc}
      </p>
    </div>
  )
}

export default Productcard