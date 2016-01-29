import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
export default class App extends React.Component{
    render(){
        return (
            <div>
                <div className="colorbar bgorange hidden-xs">
                </div>
                <Header/>
                {this.props.children}
                <div className="space"></div>
                <Footer/>
            </div>
        )
    }
}