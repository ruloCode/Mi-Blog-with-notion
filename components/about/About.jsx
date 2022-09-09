import React from "react";

import Image from "next/image";

import styles from "./about.module.scss";
import BackgroundShape2 from "../../assets/shape_top.svg";

export const About = () => {
  return (
    <section className={styles.about}>
      
      <div className={styles.bg3}>
        <Image
          alt="Mountains"
          src={BackgroundShape2}
          layout="fill"
          objectFit="contain"
        />
       
      </div>
      {/* <h2 className={styles["about-title"]}>
          About me
        </h2> */}
      
    </section>
  );
};
