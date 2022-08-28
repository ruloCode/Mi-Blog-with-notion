import React, { useState } from "react";
import classnames from "classnames";
import { getClasses } from "../../utils/classesFormater";

import styles from "./mainHeader.module.scss";

export const MainHeader = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.logo}>RuloCode.com</div>
        <button
          id="hamburger"
          onClick={() => {
            setOpenHamburger(!openHamburger);
          }}
          className={
            !openHamburger
              ? styles.hamburger
              : getClasses({ classes: "x", styles })
          }
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 35 30"
          >
            <path
              id="top"
              class="line"
              d="M166.18,102.56h25s7.52-.43,5-5.29c-2.89-5.65-8.7,2.07-8.7,2.07L169.84,117"
              transform="translate(-166.18 -94.7)"
            />
            <path
              id="bottom"
              class="line"
              d="M166.18,113.77h25s7.52.43,5,5.29c-2.89,5.64-8.7-2.07-8.7-2.07L169.84,99.31"
              transform="translate(-166.18 -94.7)"
            />
            <line
              id="middle"
              class="line"
              y1="13.48"
              x2="25"
              y2="13.48"
              x1="0"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};
