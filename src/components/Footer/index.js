import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

function Footer() {

    return (
        <footer>
            <div className='footer-container'>
                <p>Follow us on Facebook and Instagram!</p>
                <div className='social-icons'>
                    <a href="https://www.facebook.com/kirstylous" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/kirstylousdoggiedoos/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;