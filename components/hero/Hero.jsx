import React from "react";
import Image from "next/image";

import styles from "./Hero.module.scss";
import BackgroundShape from "../../assets/Fondo.svg";
import ProfilePhoto from "../../assets/rulo.png";

export const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.bg1}>
        <Image
          alt="Mountains"
          src={BackgroundShape}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.bg2}>
        <Image
          alt="Mountains"
          src={BackgroundShape}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex">
        <div className={styles.imageContainer}>
          <Image
            alt="Mountains"
            src={ProfilePhoto}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <h1>Hi, I am Rulo</h1>
      <p className={styles.ocupation}>Web developer</p>
      <p>
        Creating the next web generation. I want to make sure that the internet
        is a safe, satisfying and secure place for everyone.
      </p>
      <button type="button">Let's Talk</button>
    </header>
  );
};
