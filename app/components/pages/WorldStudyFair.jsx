import React from 'react';
import {Link} from 'react-router';

import Slide from '../Slide.jsx';

export default class WorldStudyFair extends React.Component{
    componentDidMount(){
        document.title = 'World Study Fair | Sunrise Vietnam Co. , Ltd'
    }
    render(){
        return (
            <div>
                <Slide/>
                <div className="container">
                    <div className="col-xs-12 main-content">
                        <h1>world study fair</h1>
                        <p><span className="red">WORLD STUDY FAIR</span> is our important activity, which is organized twice every
                            year. The 2016 events are going to be in Ho Chi Minh city (March 18th and September 30th), Hanoi (March 19th
                            and October 1st), Hai Phong city (March 20th and October 2nd).</p>
                        <p>In our Fair, you can meet potential students and customers; also have better view about our Vietnamese
                            Market. We also handout a guide book to attendants, which has sharing experiences from our counselors and
                            overseas students. You also can provide flyers, brochures or small gifts to students. Please find detail
                            information and booking form for our event in next pages.</p>
                        <p>These organizations have recently exhibited at a SUNRISE VIETNAM fair</p>
                    </div>
                    <div className="col-xs-12 text-center">
                        <img width="100%" className="center-block img-responsive" src={require("../../photos/fair/promo.png")}/>
                        <div className="hidden-xs space"></div>
                    </div>
                    <div className="col-xs-12 main-content">
                        <h2 className="h2-title"><span className="red h2-title">SUNRISE VIETNAM</span><b> FAIR 2016</b></h2>
                        <p>Each 6m2 stand is fully fitted with standard package of a table, five
                            chairs and an electrical outlet. Each school can use up to 4 standees. Sunrise VietNam provides interpreter
                            or supporter with no extra free.</p>
                        <p>Please mark your requirements below. </p>
                    </div>
                </div>
                <div className="hidden-xs smallspace"></div>
                <div className="container-fluid fair-info white">
                    <div className="row fair fair-r1">
                        <div className="col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-4 fairinfo-right">
                            <div className="row">
                                <div className="col-xs-2 col-xs-offset-1"><h1 className="h1-num">#1</h1></div>
                                <div className="col-xs-9">
                                    <h2><b>HO CHI MINH World Study Fair</b></h2>
                                    <h3>3:00 PM - 7:30 PM<br/>
                                        Liberty Central Saigon Hotel<br/>
                                        59 - 61 Pasteur, District 1, HCM<br/>
                                    </h3>
                                </div>
                                <div className="col-xs-8 col-xs-offset-0 col-sm-7 col-sm-offset-1">
                                    <h2><b>Friday March 18th 2016</b></h2>
                                    <h3>Attending Fee $1000</h3>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="register-fair" className="btn btnregister bgwhite mgray">REGISTER</Link>
                                </div>
                                <div className="col-xs-8 col-xs-offset-0 col-sm-7 col-sm-offset-1">
                                    <h2><b>Friday September 30th 2016</b></h2>
                                    <h3>Attending Fee $1000</h3>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="register-fair" className="btn btnregister bgwhite mgray">REGISTER</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row fair fair-r2">
                        <div className="col-xs-12 col-sm-8 fairinfo-left">
                            <div className="row">
                                <div className="col-xs-2 col-xs-offset-1"><h1 className="h1-num">#2</h1></div>
                                <div className="col-xs-9">
                                    <h2><b>HA NOI World Study Fair</b></h2>
                                    <h3>1:00 PM - 5:30 PM<br/>
                                        Star Galaxy Convention, 87 Lang Ha, Dong Da<br/>
                                        (Next to National Cinema)</h3>
                                </div>
                                <div className="col-xs-8 col-xs-offset-0 col-sm-7 col-sm-offset-1">
                                    <h2><b>Saturday March 19th 2016</b></h2>

                                    <h3>Attending Fee $1000</h3>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="register-fair" className="btn btnregister bgwhite mgray">REGISTER</Link>
                                </div>
                                <div className="col-xs-8 col-xs-offset-0 col-sm-7 col-sm-offset-1">
                                    <h2><b>Saturday Octorber 1st 2016</b></h2>

                                    <h3>Attending Fee $1000</h3>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="register-fair" className="btn btnregister bgwhite mgray">REGISTER</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row fair fair-r3">
                        <div className="col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-4  fairinfo-right">
                            <div className="row">
                                <div className="col-xs-2 col-xs-offset-1"><h1 className="h1-num">#3</h1></div>
                                <div className="col-xs-9">
                                    <h2>HAI PHONG World Study Fair</h2>
                                    <h3>8:30 AM - 12:00 PM<br/>
                                        Nam Cuong Hotel, No.47,Lach Tray str,<br/>
                                        Ngo Quyen District, Haiphong</h3>
                                </div>
                                <div className="col-xs-8 col-xs-offset-0 col-sm-7 col-sm-offset-1">
                                    <h2><b>Sunday March 20th 2016</b></h2>
                                    <h3>Attending Fee $1000</h3>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="register-fair" className="btn btnregister bgwhite mgray">REGISTER</Link>
                                </div>
                                <div className="col-xs-8 col-xs-offset-0 col-sm-7 col-sm-offset-1">
                                    <h2><b>Sunday Octorber 2nd 2016</b></h2>

                                    <h3>Attending Fee $1000</h3>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="register-fair" className="btn btnregister bgwhite mgray">REGISTER</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row fair fair-r4">
                        <div className="col-xs-12 col-sm-8 fairinfo-left">
                            <div className="row">
                                <div className="col-xs-10 col-xs-offset-1">
                                    <h3>Sunrise Vietnam will automatically offer you 5%
                                        discount if total booking amount is above $4,000 and 10% discount if total booking amount is $6,000<br/>
                                        If you have any question, feel free to contact Ms. Mai at <b>+84 936 772 474</b> or via email&nbsp;
                                        <b><a className="white mailto" href="mailto:mai.pp@sunrisevietnam.com">mai.pp@sunrisevietnam.com</a></b></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden-xs space"></div>
                <div className="container">
                    <h2 className="h2-title"><span className="h2-title red">Making your fair experience</span> easy and successful</h2>
                    <p className="text-lowercase">We know our clients are extremely busy and are consistently traveling the world. To help reduce the work load, SUNRISE VIETNAM offers a range of support services that makes participating easier and more cost effective.</p>
                    <div className="smallspace"></div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-5">
                            <img className="img-responsive center-block" src={require("../../photos/fair/fair1.png")}/>
                            <h2 className="text-center text-uppercase"><b>Print locally</b></h2>
                            <h3 className="text-center">SUNRISE VIETNAM can print your brochures and leaflets locally and have it waiting on your stand when you arrive. We can even store material for future use, deliver to advising centres and agencies or carry out in-country mailings. Avoid costly shipping and customs problems.</h3>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-sm-offset-2">
                            <img className="img-responsive center-block" src={require("../../photos/fair/fair2.png")}/>
                            <h2  className="text-center text-uppercase"><b>Lost in translation</b></h2>
                            <h3 className="text-center">Translators can be organised to help you on your stand. They are especially helpful when talking with parents or if you are only sending one representative. We offer translator or supporter for free in fair.</h3>
                        </div>
                    </div>
                    <div className="hidden-xs smallspace"></div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-5">
                            <img className="img-responsive center-block" src={require("../../photos/fair/fair3.png")}/>
                            <h2  className="text-center text-uppercase"><b>Save on hotels</b></h2>
                            <h3 className="text-center">We will advise you to hotels which have discount rate. These are even available before and after the event in case you wish to arrive early or extend your stay  for follow up or meetings. </h3>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-sm-offset-2">
                            <img className="img-responsive center-block" src={require("../../photos/fair/fair4.png")}/>
                            <h2  className="text-center text-uppercase"><b>Print stand graphics</b></h2>
                            <h3 className="text-center">Tired of carrying posters and pop up stands? We can help you to print in Vietnam, which is cheaper and more effective.</h3>
                        </div>
                    </div>
                </div>
                <div className="space"></div>
            </div>
        )
    }
}