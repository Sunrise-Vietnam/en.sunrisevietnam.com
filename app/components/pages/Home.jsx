import React from 'react';

import Slide from '../Slide.jsx';

export default class Home extends React.Component{
    componentDidMount(){
        require('../../libs/jcarousel.responsive.js');
    }
    render(){
        return <div>
            <Slide/>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="smallspace"></div>
                        <h5 className="text-center bold">our partners</h5></div>
                    <div className="col-xs-12 nationalintrobar">
                        <div className="jcarousel-wrapper">
                            <div className="jcarousel" data-jcarousel="true">
                                <ul id="ulcarousel">
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/anh.png")}/>
                                        <h5 className="text-center">England</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/usa.png")}/>
                                        <h5 className="text-center">USA</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/singapore.png")}/>
                                        <h5 className="text-center">singapore</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/australia.png")}/>
                                        <h5 className="text-center">Australia</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/canada.png")}/>
                                        <h5 className="text-center">Canada</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/finland.png")}/>
                                        <h5 className="text-center">Finland</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/malaysia.png")}/>
                                        <h5 className="text-center">Malaysia</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/thailand.png")}/>
                                        <h5 className="text-center">Thailand</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/Switzerland.png")}/>
                                        <h5 className="text-center">Switzerland</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/china.png")}/>
                                        <h5 className="text-center">China</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/Netherlands.png")}/>
                                        <h5 className="text-center">Netherlands</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/newzealnd.png")}/>
                                        <h5 className="text-center">New zealand</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/anh-y.png")}/>
                                        <h5 className="text-center">italy</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/anh-han-quoc.png")}/>
                                        <h5 className="text-center">korea</h5>
                                    </li>
                                    <li className="licarousel">
                                        <img src={require("../../photos/home/japan.png")}/>
                                        <h5 className="text-center">japan</h5>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" className="jcarousel-control-prev" data-jcarouselcontrol="true"><span className="glyphicon glyphicon-chevron-left"></span></a>
                            <a href="#" className="jcarousel-control-next" data-jcarouselcontrol="true"><span className="glyphicon glyphicon-chevron-right"></span></a>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6 wsfairintro">
                        <div className="col-xs-12 intro-header"><h5>WORLD STUDY FAIR</h5></div>
                        <div className="col-xs-12 wsfairintro-body media">
                            <div className="media-left media-middle wsfairintro-num bgorange white"><h3><b>1</b></h3></div>
                            <div className="media-body media-middle wsfairintro-text">
                                <h5>ho chi minh city</h5>
                                <p>+ 3pm - 7.30 pm Friday March 18th 2016</p>
                                <p>+ 3pm - 7.30 pm Friday September 30th 2016</p>
                            </div>
                        </div>
                        <div className="col-xs-12 wsfairintro-body media">
                            <div className="media-left media-middle wsfairintro-num bgorange white"><h3><b>2</b></h3></div>
                            <div className="media-body media-middle wsfairintro-text">
                                <h5>ha noi</h5>
                                <p>+ 1pm - 5.30 pm Saturday March 19th 2016</p>
                                <p>+ 1pm - 5.30 pm saturday octorber 1st 2016</p>
                            </div>
                        </div>
                        <div className="col-xs-12 wsfairintro-body media">
                            <div className="media-left media-middle wsfairintro-num bgorange white"><h3>3</h3></div>
                            <div className="media-body media-middlecol-xs-9 col-xs-offset-1 wsfairintro-text">
                                <h5>hai phong</h5>
                                <p>+ 8 am - 12 pm Sunday March 20th 2016</p>
                                <p>+ 8 am - 12 pm sunday octorber 2nd 2016</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 wsguideintro">
                        <div className="col-xs-12 intro-header"><h5>WORLD STUDY GUIDE</h5></div>
                        <div className="col-xs-12 col-sm-6 media wsguideintro-row">
                            <div className="media-left media-middle">
                                <a href="http://www.mediafire.com/download/d8plfwcrmv2cc96/WORLD_STUDY_GUIDE+2012.pdf" target="_blank">
                                    <img width="100" className="media-object" src={require("../../photos/guide/1.png")}/>
                                </a>
                            </div>
                            <div className="media-body media-middle">
                                <a href="http://www.mediafire.com/download/d8plfwcrmv2cc96/WORLD_STUDY_GUIDE+2012.pdf" target="_blank" className="media-heading mgray text-left">World Study Guide I</a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 media wsguideintro-row">
                            <div className="media-left media-middle">
                                <a href="http://www.mediafire.com/download/d9u15uviygasb21/WSG_2013_fin.pdf" target="_blank">
                                    <img width="100" className="media-object" src={require("../../photos/guide/2.png")}/>
                                </a>
                            </div>
                            <div className="media-body media-middle">
                                <a href="http://www.mediafire.com/download/d9u15uviygasb21/WSG_2013_fin.pdf" target="_blank" className="media-heading mgray text-left">World Study Guide II</a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 media wsguideintro-row">
                            <div className="media-left media-middle">
                                <a href="http://www.mediafire.com/download/d9u15uviygasb21/WSG_2013_fin.pdf" target="_blank">
                                    <img width="100" className="media-object" src={require("../../photos/guide/3.png")}/>
                                </a>
                            </div>
                            <div className="media-body media-middle">
                                <a href="http://www.mediafire.com/download/d9u15uviygasb21/WSG_2013_fin.pdf" target="_blank" className="media-heading mgray text-left">World Study Guide III</a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 media wsguideintro-row">
                            <div className="media-left media-middle">
                                <a href="">
                                    <img width="100" className="media-object" src={require("../../photos/guide/4.png")}/>
                                </a>
                            </div>
                            <div className="media-body media-middle">
                                <p className="media-heading text-left">World Study Guide IV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}