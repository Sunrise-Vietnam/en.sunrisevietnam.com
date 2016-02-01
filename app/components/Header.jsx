import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component{
    render(){
        return (
            <header className="container">
                <nav className="navbar navbar-default menubar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#smallmenu" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to='/' className="hidden-xs navbar-brand"><img src={require("../photos/logo.png")}/></Link>
                            <Link to='/' className="visible-xs navbar-brand"><b><span className="red">Sunrise</span> Vietnam</b></Link>
                        </div>
                        <div className="collapse navbar-collapse" id="smallmenu">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="hidden-xs"><Link to='/'><img className="home-icon" src={require("../photos/home/homeicon.png")}/></Link></li>
                                <li className="visible-xs"><Link to='/'>HOME</Link></li>
                                <li><Link to='about-us'>ABOUT US</Link></li>
                                <li><Link to='our-team'>OUR TEAM</Link></li>
                                <li><Link to='world-study-fair'>WORLD STUDY FAIR</Link></li>
                                <li><Link to='world-study-guide'>WORLD STUDY GUIDE</Link></li>
                                <li><Link to='contact-us'>CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}