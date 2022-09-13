import React from "react";
import styles from "./Navigator.module.scss";
export const Navigator = () => {
  return (
    <nav className={styles.navigator}>
      <ul>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
        <a href="#about">Portfolio</a>
        </li>
        <li>
        <a href="#about">Contact</a>

        </li>
      </ul>
    </nav>
  );
};
