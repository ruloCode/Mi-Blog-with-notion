import React from 'react';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <section id="footer" className={styles.footer}>
      <div className={styles['footer-social']}>
        <a
          href="mailto: andres@rulocode.com"
          target="_blank"
          className={styles['footer-social-icon']}
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rulocode/"
          target="_blank"
          className={styles['footer-social-icon']}
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/ruloCode"
          target="_blank"
          className={styles['footer-social-icon']}
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://twitter.com/rulo_code"
          target="_blank"
          className={styles['footer-social-icon']}
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
      <p>© All rights reserved 2022</p>
    </section>
  );
};

export default Footer;
