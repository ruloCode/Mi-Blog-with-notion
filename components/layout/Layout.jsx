import React from "react";
import { MainHeader } from "../mainHeader/MainHeader";
import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
   <>
     <MainHeader />
    
     <div className={styles.wrapper}>
       <div className={styles.appContainer}>{children}</div>
    
       {/* <div>footer</div> */}
       {/* <Footer /> */}
     </div>
   </>
  );
};
