import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import UserHome from './pages/userhome';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SongSection from './pages/songsection';
import About from './pages/about';
import Contact from './pages/contact';

function App() {

  return (
    <div className="wrapper">
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/userhome" component={UserHome} />
          <Route path="/songsection" component={SongSection} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
