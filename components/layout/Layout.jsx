import React from 'react'
import { MainHeader } from '../mainHeader/MainHeader'

export const Layout = ({children}) => {
  return (
    <div>
        <MainHeader />
        {children}
        <div>
            footer
        </div>
        {/* <Footer /> */}
    </div>
  )
}
