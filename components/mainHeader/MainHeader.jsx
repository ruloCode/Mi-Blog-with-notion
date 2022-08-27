import React, {useState} from "react";
import classnames from 'classnames'
import styles from "./mainHeader.module.css";

export const MainHeader = () => {

    const [openHamburger, setOpenHamburger] = useState(false)
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>RuloCode.com</div>
      <div 
      onClick={()=> {
        setOpenHamburger(!openHamburger)
      }}
      className={classnames(styles.hamburger, {
        [styles.toggle]: openHamburger,
      })}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
      <ul 
      
      className={classnames(styles["nav-links"], {
        [styles.open]: openHamburger,
      })}
      >
        <li 
         className={classnames(styles.link, {
            [styles.fade]: openHamburger,
          })}>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};
