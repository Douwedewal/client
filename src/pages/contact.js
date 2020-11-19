import React from 'react';
import NavBarMain from '../components/NavBarMain/NavBarMain';
import logo from '../assets/main_logo.png';
import mic from '../assets/mic.jpg'

function Contact() {
    return(
        <div className="about-wrapper">
            <NavBarMain />
            <h2>- Contact -</h2>
            <div className="text-section" >
                <p>
                Email: Douwe_de_wal@live.com<br />
                Phone: 06-53877806<br />
                <img src={logo} alt="logo" />
                </p>
                <img src={mic} alt="guitar" />
            </div>
        </div>
    );
}

export default Contact;
