import React from 'react';
import NavBarMain from '../components/NavBarMain/NavBarMain';
import JumbotronMain from '../components/JumbotronMain/JumbotronMain';
import CardDeckMain from '../components/CardDeck/CardDeckMain';
import '../App.css';

function Home() {
    return (
        <div className="wrapper">
            <NavBarMain />
            <JumbotronMain />
            <CardDeckMain />
        </div>
    );
}

export default Home;