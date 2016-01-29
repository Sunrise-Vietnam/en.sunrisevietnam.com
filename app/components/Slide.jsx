import React from 'react';

export default class Slide extends React.Component{
    render(){
        return (
            <div id="banner" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#banner" data-slide-to="0" className="active"></li>
                    <li data-target="#banner" data-slide-to="1"></li>
                    <li data-target="#banner" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item">
                        <img className="img-responsive" src={require("../photos/banner1.jpg")}/>
                    </div>
                    <div className="item">
                        <img className="img-responsive" src={require("../photos/banner2.png")}/>
                    </div>
                    <div className="item active">
                        <img className="img-responsive" src={require("../photos/banner3.jpg")}/>
                    </div>
                </div>
                <a className="left carousel-control" href="#banner" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#banner" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}