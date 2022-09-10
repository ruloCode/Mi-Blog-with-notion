import React from 'react'
import Image from "next/image";
import {Box} from '@vitau/layout'

import { Button } from '../ui/button/Button'
import WaveSVG from "../../assets/wave.svg";

import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <seccion  className={styles.footer}>
        <div className={styles.bg3}>
          <Image
            alt="Mountains"
            src={WaveSVG}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Box>
            <h2>
            Interested in my work?
            </h2>
        </Box>

        <Button >
            Let's Talk!
        </Button>
        <div className={styles["footer-social"]}>
        <a href="" target="_blank" className={styles["footer-social-icon"]}>
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="" target="_blank" className={styles["footer-social-icon"]}>
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="" target="_blank" className={styles["footer-social-icon"]}>
                <i class="fa-brands fa-twitter"></i>
              </a>
        </div>
        <p>© All rights reserved 2022</p>
    </seccion>
  )
}

export default Footer