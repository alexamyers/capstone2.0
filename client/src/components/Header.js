import React from 'react';
import '../App.css';
import PSR from '../images/PSR.png';
import cart from '../images/cart.png';
import ICON from '../images/ICON.png';

function Header() {

    return (
        <div className='header'>
            <div className='header-top'>
                <img className='logo' src={ PSR } alt='Proper Soul Records Logo' />
                    <div className='right-header-items'>
                    <input className='search-box' placeholder='SEARCH...' />
                    <img className='profile-icon' src={ ICON } alt='profile image' />
                    <img className='shopping-cart' src={ cart } alt='shopping cart' />
                    </div>
            </div>
            <div className='header-bottom'>
            <h1>HOME</h1>
            <h1>GENRE</h1>
            <h1>ABOUT</h1>
            </div>
        </div>
    )
}

export default Header;