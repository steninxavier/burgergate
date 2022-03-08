import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import {useSelector} from "react-redux";
import Link from 'next/link';

function Navbar() {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                   <Image src="/Images/telephone.png" width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ODER NOW</div>
                    <div className={styles.text}>15906477551</div>
                </div>
            </div>
            <div className={styles.item}>
            <ul className={styles.list}>
            <li className={styles.listItem}>
               <Link href="/">Homepage</Link> 
                </li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <h1 className={styles.logo}>BURGER GATE</h1>
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
            </ul>
            </div>
            <Link href="/cart">
            <div className={styles.item}>
                <div className={styles.cart}>

            <Badge badgeContent={`${quantity}`} color="primary">
            <ShoppingCartOutlinedIcon/>  
            </Badge>
            </div>
                </div>
                </Link>
        </div>
    )
}

export default Navbar
