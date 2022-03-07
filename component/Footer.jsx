import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>
              BURGER GATE <br/>Tasty Burgers
            </h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
            <div className={styles.address}>
            <p className={styles.text}>
              13357 stettiner strasse 44.
              <br /> berlin, germany
              <br /> +4915906477551
            </p>
            <p className={styles.text}>
              15578 osloer starsse 45.
              <br /> berlin, germany
              <br /> +4915906477551
            </p>
            <p className={styles.text}>
              45667 daniel strasse 78.
              <br /> berlin, germany
              <br /> +4915906477551
            </p>
            <p className={styles.text}>
              78898 shonehauser allae 98.
              <br /> berlin, germany
              <br /> +4915906477551
            </p>
          </div>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
              MONDAY - FRIDAY
              <br /> 9:00 - 22:00
            </p>
            <p className={styles.text}>
              SATURDAY - SUNDAY
              <br /> 12:00 - 24:00
            </p>
          </div>
        </div>
      </div>
    )
}

export default Footer
