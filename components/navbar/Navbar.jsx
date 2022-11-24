import React from "react";
import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <a className={styles.navbar__item} href="#about">
          <p>About </p>
        </a>
      </li>
      <li>
        <a className={styles.navbar__item} href="#about">
          <p>Projects </p>
        </a>
      </li>
      <li>
        <a  className={styles.navbar__item} href="#about">
          <p>Connect</p>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
