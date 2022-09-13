import React from 'react'
import Image from "next/image";
import {Flex} from '@vitau/layout'

import { Button } from '../ui/button/Button'
import WaveSVG from "../../assets/wave2.svg";

import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <section id='footer'  className={styles.footer}>
        <div className={styles.bg3}>
          <Image
            alt="Mountains"
            src={WaveSVG}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Flex flexDirection='column' alignItems='center' justifyContent='center'  paddingTop='16px'>
            <h2>
            Interested in my work?<br />
            </h2>
            <h3>
            Get in Touch

            </h3>
        </Flex>

       
        <div className={styles["footer-social"]}>
        <a href="mailto: andres@rulocode.com" target="_blank" className={styles["footer-social-icon"]}>
              <i class="fa-regular fa-envelope"></i>
              </a>
        <a href="https://www.linkedin.com/in/rulocode/" target="_blank" className={styles["footer-social-icon"]}>
                <i class="fa-brands fa-linkedin-in"></i>
                
              </a>
              <a href="https://github.com/ruloCode" target="_blank" className={styles["footer-social-icon"]}>
                <i class="fa-brands fa-github"></i>

                
              </a>
              <a href="https://twitter.com/rulo_code" target="_blank" className={styles["footer-social-icon"]}>
                <i class="fa-brands fa-twitter"></i>
              </a>
              
        </div>
        <p>© All rights reserved 2022</p>
    </section>
  )
}

export default Footer