import React from 'react';
import NavBarMain from '../components/NavBarMain/NavBarMain';
import './style.css';
import guitar from '../assets/guitar.jpg';
import logo from '../assets/main_logo.png';

function About() {
    return(
        <div className="about-wrapper">
            <NavBarMain />
            <h2>- About Fuming Frets -</h2>
            <div className="text-section" >
                <img src={guitar} alt="guitar" />
                <p>
                Starting off as an development course project, Fuming Frets is on its way to becoming a big audio sharing service!<br />
                For now, we are still in development, which means there are things to be added and things to be optimised.<br />
                The biggest feature of the website, sharing your own audio files, is working, so have fun and get started!<br />
                <img src={logo} alt="logo" />
                </p>
            </div>
        </div>
    );
}

export default About;