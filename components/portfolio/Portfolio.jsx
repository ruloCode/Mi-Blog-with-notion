import React from "react";
import { Button } from "../ui/button/Button.jsx";
import Image from "next/image";
import { Grid, Box } from "@vitau/layout";
import LastProjectImage from "../../assets/last_project.png";

import styles from "./portfolio.module.scss";
import BackgroundShape2 from "../../assets/shape_top.svg";
import BackgroundShape_down from "../../assets/shape_top.svg";

export const Portfolio = () => {
  return (
    <div className="wrapper">
      <section className={styles.portfolio}>
        <h2 className={styles["portfolio-title"]}>My last project</h2>

        <div className={styles["portfolio-img"]}>
          <Image
            alt="Mountains"
            src={LastProjectImage}
            layout="fill"
            objectFit="contain"
          />
          <h3>Hair Space</h3>
        </div>
        <Box marginBottom="1rem">
          <p className={styles["portfolio-description"]}>
            The project took several months to complete and involved a lot of
            collaboration with the client. read more.
          </p>
          <a href="" className={styles["portfolio-description-readMore"]}>
            read more
          </a>
        </Box>
        <Grid gridGap="1rem" gridTemplateColumns="1fr 1fr">
          <Button>Demo</Button>
          <Button variant="outline">Code</Button>
        </Grid>
      </section>
    </div>
  );
};
