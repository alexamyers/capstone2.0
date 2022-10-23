import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/cart'>
                    <img className='shopping-cart' src={ cart } alt='shopping cart' />
                    </Link>
                    </div>
            </div>
            <div className='header-bottom'>
            <Link to='/'>HOME</Link>
            <div className='dropdown'>
            <button className='dropbtn'>GENRE</button>
            <div className='dropdown-content'>
                <a href="#">ROCK</a>
                <a href="#">RAP</a>
                <a href="#">SOUL</a>
                <a href="#">LATIN</a>
            </div>
            </div>
            <Link to='/about'>ABOUT</Link>
            </div>
        </div>
    )
}

export default Header;