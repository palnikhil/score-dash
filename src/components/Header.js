import React from 'react';
import logo from '../assets/logo.png';
import profile from '../assets/profile_img.png';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img src={logo} height='30px' width='auto'/>
            <div className='profile-section'>
                <img className='profile-section-img' src={profile} />
                <p className='profile-section-name'>Nikhil Pal</p>
            </div>
        </div>
    );
}

export default Header;