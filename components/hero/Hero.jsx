import React from 'react';

import Image from 'next/image';

import styles from './Hero.module.scss';
import BackgroundShape from '../../assets/Fondo.svg';
import ProfilePhoto from '../../assets/rulo_profile.jpg';
import { Button } from '../ui/button/Button';
import { Box, Flex, Grid } from '@vitau/layout';

export const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles['hero-content']}>
          <div className={styles['hero-img']}>
            <Image
              alt="User profile photo"
              src={ProfilePhoto}
              objectFit="contain"
              priority
            />
          </div>
          <div className={styles['hero-data']}>
            <h1 className={styles['hero-title']}>
              Hi, I am Rulo, <br /> Web Developer
            </h1>

            <p>
              Creating the next web generation. I want to make sure that the
              internet is a safe, satisfying and secure place for everyone.
            </p>
            <Flex justifyContent="center">
              <Button handleClick={() => window.location.replace('#footer')}>
                Let's Talk
              </Button>
            </Flex>
          </div>
        </div>
      </section>
    </div>
  );
};
