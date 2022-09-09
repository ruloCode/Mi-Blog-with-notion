import React from "react";

import Image from "next/image";
import ProfilePhoto from "../../assets/rulo2.png";

import styles from "./about.module.scss";
import BackgroundShape2 from "../../assets/shape_top.svg";
import BackgroundShape_down from "../../assets/shape_top.svg";

export const About = () => {
  return (
    <div>
      <section className={styles.about}>
        <div className={styles.bg3}>
          <Image
            alt="Mountains"
            src={BackgroundShape2}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2 className={styles["about-title"]}>About me</h2>

        <div className={styles["about-img"]}>
          <Image
            alt="Mountains"
            src={ProfilePhoto}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="wrapper">
          <p className={styles["about-description"]}>
            My name is Andrés Santana but you can call me Rulo, I have a passion
            for web design and enjoy creating websites that are both
            aesthetically pleasing and easy to use.
          </p>
          <a href="" className={styles["about-description-readMore"]}>read more</a>
        </div>
        <div className={styles.bg2}>
          <Image
            alt="Mountains"
            src={BackgroundShape2}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </section>
    </div>
  );
};
