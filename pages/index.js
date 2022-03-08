import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Featured from '../component/Featured'
import Productlist from '../component/Productlist'
import axios from 'axios'
import { NEXT_URL } from '../config'

export default function Home({Productlistr}) {
  return (
    <div className={styles.container}>
    
      <Head>
        <title>BurgerGate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {/* <Productlist Productlist={Productlistr}/> */}
    </div>
  )
}
// export const getServerSideProps = async()=>{
//   const res =await axios.get(`${NEXT_URL}/api/product`);
//   return{
//     props:{
//       Productlistr: res.data,
//     }
//   }
// };


