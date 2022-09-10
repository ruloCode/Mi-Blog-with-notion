import React from 'react'
import classnames from 'classnames'
import styles from './button.module.scss'

export const Button = ({variant, children}) => {
  return (
    <button className={classnames(styles.button, {
    [styles["button--outline"]] : variant === 'outline'
    })} type="button">{children}</button>
  )
}
