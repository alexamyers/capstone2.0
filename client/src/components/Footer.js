import React from 'react';
import '../App.css';
import socials from '../images/socials.png';

function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-contact'>
                <h2>CONTACT</h2>
                <p>EMAIL@PROPERSOULRECORDS.COM</p>
                <p>999.999.9999</p>
            </div>
            <h2>ABOUT US</h2>
            <div className='footer-social'>
                <h2>SOCIAL</h2>
                <img className='social-media-icons' src={ socials } alt='social media icons display' />
            </div>
        </div>
    )
}

export default Footer;