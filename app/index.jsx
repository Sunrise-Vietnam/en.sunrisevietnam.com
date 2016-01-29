require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
//require('expose?$!expose?jQuery!./libs/jcarousel.responsive.js');
require('./main.css');

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

import Home from './components/pages/Home.jsx';
import AboutUs from './components/pages/AboutUs.jsx';
import OurTeam from './components/pages/OurTeam.jsx';
import WorldStudyFair from './components/pages/WorldStudyFair.jsx';
import WorldStudyGuide from './components/pages/WorldStudyGuide.jsx';
import ContactUs from './components/pages/ContactUs.jsx';

import { Router, Route, browserHistory } from 'react-router';

ReactDom.render((
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home}/>
            <Route path="about-us" component={AboutUs}/>
            <Route path="our-team" component={OurTeam}/>
            <Route path="world-study-fair" component={WorldStudyFair}/>
            <Route path="world-study-guide" component={WorldStudyGuide}/>
            <Route path="contact-us" component={ContactUs}/>
        </Route>
    </Router>
), document.getElementById('app'))
