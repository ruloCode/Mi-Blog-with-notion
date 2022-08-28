import React from 'react'
import styles from './Navigator.module.scss'
export const Navigator = () => {
  return (
    <nav className={styles.navigator}>
        <ul>
            <li>About me</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact me</li>
        </ul>
    </nav>
  )
}
