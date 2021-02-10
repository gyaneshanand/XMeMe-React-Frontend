import React from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core";

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="logo1.png"  alt="" />
            </div>
            <div className='header__title'>
                <h2>XMeMe</h2>
            </div>
            <div className='header__right'>
                <Avatar/>
                <h3 >Hello Guest!</h3>
            </div>              
        </div>
    )
}

export default Header
