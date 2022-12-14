import React from "react";
import getClasses from "../../utils/classesFormater";

import Image from "next/image";

import styles from "./Hero.module.scss";
import BackgroundShape from "../../assets/Fondo.svg";
import ProfilePhoto from "../../assets/rulo.png";
import { Button } from "../ui/button/Button";
import { Box, Flex, Grid } from "@vitau/layout";

export const Hero = () => {
  return (
    <div >
      <section className={styles.hero}>
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

        <div className={styles["hero-content"]}>
       

          <div className={styles["hero-img"]}>
            <Image
              alt="Mountains"
              src={ProfilePhoto}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles["hero-data"]}>
            <h1 className={styles["hero-title"]}>
              Hi, I am <span>Rulo</span>{" "}
            </h1>
            <h3 className={styles["hero-subtitle"]}>Frontend developer</h3>

            <p className={styles["hero-description"]}>
              Creating the next web generation. I want to make sure that the
              internet is a safe, satisfying and secure place for everyone.
            </p>
            <Flex>
              <Box>
                <Button handleClick={() => window.location.replace("#footer")}>
                  Let's Talk
                </Button>
              </Box>

              <Grid
                gridTemplateColumns="repeat(3, 1fr)"
                className={styles["hero-social--button"]}
              >
                <a
                  href="https://www.linkedin.com/in/rulocode/"
                  target="_blank"
                  className={styles["hero-social-icon"]}
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/ruloCode"
                  target="_blank"
                  className={styles["hero-social-icon"]}
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://twitter.com/rulo_code"
                  target="_blank"
                  className={styles["hero-social-icon"]}
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </Grid>
            </Flex>
          </div>
        </div>
      </section>
    </div>
  );
};
