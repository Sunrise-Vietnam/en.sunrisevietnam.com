import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component{
    render(){
        return (
            <footer className="bgdgray white">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-11">
                            <img className="img-responsive" id="background-dot" src={require("../photos/footer/dot.png")}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <h6>hanoi <span className="dorange">(head office)</span></h6>
                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object" src={require("../photos/footer/adicon.png")}/>
                                </div>
                                <div className="media-body media-middle">
                                    <p className="media-heading">86 Cua Bac, Ba Dinh dist. Hanoi</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object" src={require("../photos/footer/phoneicon.png")}/>
                                </div>
                                <div className="media-body media-middle">
                                    <p>Tel: +84 4 37224878 / 37224898</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object" src={require("../photos/footer/printicon.png")}/>
                                </div>
                                <div className="media-body media-middle">
                                    <p>Fax: +84 4 37224855</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <h6>haiphong <span className="dorange">(office)</span></h6>

                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object" src={require("../photos/footer/adicon.png")}/>
                                </div>
                                <div className="media-body media-middle">
                                    <p className="media-heading">29 Nguyen Trai, Haiphong Vietnam</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object" src={require("../photos/footer/phoneicon.png")}/>
                                </div>
                                <div className="media-body media-middle">
                                    <p>Tel: + (84-31) 2640689 - 3653269</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object" src={require("../photos/footer/printicon.png")}/>
                                </div>
                                <div className="media-body media-middle">
                                    <p>Fax: + (84-31) 3732895</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <h6>ho chi minh <span className="dorange">(office)</span></h6>
                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object" src={require("../photos/footer/adicon.png")}/>
                                </div>
                                <div className="media-body media-middle">
                                    <p className="media-heading">Level 7 Thanh Dung Tower, 179 Nguyen Cu Trinh str., Nguyen Cu Trinh
                                        Ward, District 1</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object" src={require("../photos/footer/phoneicon.png")}/>
                                </div>
                                <div className="media-body media-middle">
                                    <p>Tel: + (84-8) 38370176 - 38370226</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object" src={require("../photos/footer/printicon.png")}/>
                                </div>
                                <div className="media-body media-middle">
                                    <p>Fax: + (84-8) 38360940</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <hr/>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-lg-2">
                            <ul>
                                <li className="blue"><Link to='/' className="white">home</Link></li>
                                <li className="blue"><Link to='about-us' className="white">about us</Link></li>
                                <li className="blue"><Link to='our-team' className="white">our team</Link></li>
                                <li className="blue"><Link to='world-study-fair' className="white">world study fair</Link></li>
                                <li className="blue"><Link to='world-study-guide' className="white">world study guide</Link></li>
                                <li className="blue"><Link to='contact-us' className="white">contact us</Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-lg-3"><p><span className="blue">Web:</span> sunrisevietnam.com</p></div>
                        <div className="col-xs-12 col-sm-4 col-lg-3"><p><span className="blue">Email:</span> info@sunrisevietnam.com</p></div>
                        <div className="col-xs-12 col-sm-6 col-lg-4"><p><span className="blue">Facebook:</span> www.facebook.com/thaiduong.vietnam</p></div>
                        <div className="col-xs-12 col-sm-4 social">
                            <a href="https://www.facebook.com/thaiduong.vietnam" target="_blank"><img src={require("../photos/footer/fb.png")}/></a>
                            <a href="https://plus.google.com/+Sunrisevietnam-tuvanduhoc/about" target="_blank"><img src={require("../photos/footer/g.png")}/></a>
                            <a href="https://twitter.com/SunriseVietnam" target="_blank"><img src={require("../photos/footer/tw.png")}/></a>
                            <a href="https://www.youtube.com/watch?v=J_5ByqI-_KQ" target="_blank"><img src={require("../photos/footer/yt.png")}/></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 smallspace"></div>
                    </div>
                </div>
            </footer>
        )
    }
}