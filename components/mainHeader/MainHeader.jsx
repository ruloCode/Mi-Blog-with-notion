import React, { useState } from "react";
import classnames from "classnames";
import { getClasses } from "../../utils/classesFormater";

import styles from "./mainHeader.module.scss";
import { HamburgerButton } from "../ui/hamburgerButton/HamburgerButton";
import { SlideOutMenu } from "../ui/slideOutMenu/SlideOutMenu.tsx";
import sleep from "../../utils/hooks/sleep";

export const MainHeader = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [hiding, setHiding] = useState(false);
const handleClose = async () => {
  if(openHamburger) {
    setHiding(true);
    await sleep(200);
    setOpenHamburger(!openHamburger);
    setHiding(false);
  }
 
  setOpenHamburger(!openHamburger);
  setHiding(false);
 
}
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.logo}>RuloCode.com</div>
        <HamburgerButton
          handleClick={handleClose}
          isOpen={openHamburger}
        />

        <SlideOutMenu
          title="Filtros"
          position="right"
          isOpen={openHamburger}
          width={305}
          attributes={{
            ariaLabel: "Cerrar carrito",
            title: "Cerrar carrito",
          }}
          hiding={hiding}
          handleClose={handleClose}
        />
      </nav>
    </div>
  );
};
