import React from 'react';

import Slide from '../Slide.jsx'

export default class AboutUs extends React.Component{
    componentDidMount(){
        document.title = 'About Us | Sunrise Vietnam Co. , Ltd'
    }
    render(){
        return(
            <div>
                <Slide/>
                <div className="container">
                    <div className="col-xs-12 main-content">
                        <h1>about us</h1>
                        <div className="row">
                            <div className="col-xs-7">
                                <h3 className="h3-title">Brief introduction</h3>
                                <p><span className="red"><b>SUNRISE VIETNAM</b></span> is one of the leading companies in Education
                                    Consultancy in Vietnam, founded in June 2002, member of VCCI
                                    <i>(Vietnam Chamber of Commerce and Industry)</i> and member of VIECA
                                    <i>(Vietnam International Education Consultancy Association)</i>.</p>
                                <p><span className="red"><b>SUNRISE VIETNAM</b></span> ‘s Director, Ms Tran Thi Dan has been elected to
                                    be Vice President of VIECA <i>(Vietnam International Education
                                        Consultancy Association)</i> from 2006 to 2013 (two terms) with 20
                                    members who are qualified Education Consultancy Companies in
                                    Vietnam.</p>
                                <p><span className="red"><b>SUNRISE VIETNAM</b></span> is recruiting Vietnamese students to study in UK,
                                    USA, Australia, Canada, New Zealand, Singapore, Netherlands,
                                    Switzerland, Italy, China, Malaysia and Thailand. Our students study
                                    languages, summer courses, short training courses, study tours, high
                                    schools, foundation courses, undergraduate and postgraduate courses
                                    (bachelors, masters and doctorates)…</p>
                                <p className="hidden-xs hidden-sm"><span className="red"><b>SUNRISE VIETNAM</b></span> are known by British Council and UK Embassy;
                                    Australian International Education and Australia Embassy; New Zealand
                                    Trade and New Zealand Embassy, Singapore Tourism Board (Singapore
                                    Education Department), Canadian Trade, US Education Centre... as one of
                                    the best Education Agencies in Vietnam for their markets not only by the
                                    big number of successful visas applications but also the high quality of the
                                    students and the high quality of services which SUNRISE VIETNAM has
                                    done for them and for the education providers.</p>
                                <p className="hidden-xs hidden-sm">For the USA and Canada markets, <span className="red"><b>SUNRISE VIETNAM</b></span> is also very
                                    successful, especially for exchange programs, high school, undergraduate
                                    and postgraduate programs</p>
                            </div>
                            <div className="col-xs-5">
                                <img id="imgabout1" className="img-responsive right" src={require("../../photos/aboutus/about1.png")}/>
                            </div>
                        </div>
                        <div className="smallspace visible-xs visible-sm"></div>
                        <div className="row">
                            <div className="col-xs-12 visible-xs visible-sm">
                                <p className="visible-xs visible-sm"><span className="red"><b>SUNRISE VIETNAM</b></span> are known by British Council and UK Embassy;
                                    Australian International Education and Australia Embassy; New Zealand
                                    Trade and New Zealand Embassy, Singapore Tourism Board (Singapore
                                    Education Department), Canadian Trade, US Education Centre... as one of
                                    the best Education Agencies in Vietnam for their markets not only by the
                                    big number of successful visas applications but also the high quality of the
                                    students and the high quality of services which SUNRISE VIETNAM has
                                    done for them and for the education providers.</p>
                                <p className="hidden-md hidden-lg">For the USA and Canada markets, <span className="red"><b>SUNRISE VIETNAM</b></span> is also very
                                    successful, especially for exchange programs, high school, undergraduate
                                    and postgraduate programs</p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="row">
                            <div className="col-xs-5">
                                <img className="img-responsive" src={require("../../photos/aboutus/about2.png")}/>
                            </div>
                            <div className="col-xs-7">
                                <h3 className="h3-title">main activities</h3>
                                <p>To give consultation and advices to clients who are interested in
                                    studying overseas; Assisting them to do the related procedures</p>
                                <p>• Promoting/ marketing the programs for international educators.</p>
                                <p>• Consulting/organizing the short training courses according to the
                                    special requirements of clients in Vietnam and abroad.</p>
                                <p>• Arranging summer camps for young students in Vietnam and overseas.</p>
                                <p>• Arranging short training courses and study tours for adults, staff, high
                                    ranking officers… from companies, firms, non – profit organizations,
                                    social organizations, government bodies… to upgrade foreign
                                    languages, working skills… abroad.</p>
                                <p>• Education development projects counseling.</p>
                                <p>• Investment consulting in Education &amp; Training.</p>
                                <p>• Languages training</p>
                                <p>• Business courses training</p>
                                <p>• Professional skills training &amp; cooperate training</p>
                                <p>• Issuing online and hard copy of annual World Study Guide free
                                    distributed to potential students in Vietnam (10,000 hard copies):</p>
                                <p className="hidden-xs hidden-sm">World study guide #1:<br/><a className="blue" href="http://www.sunrisevietnam.com/gallery/53-
                    world-study-guide-141.html">http://www.sunrisevietnam.com/gallery/53-
                                    world-study-guide-141.html</a></p>
                                <p className="hidden-xs hidden-sm">World study guide #2:<br/><a className="blue" href="http://www.sunrisevietnam.com/gallery/53-worldstudy-guide-141.html">http://www.sunrisevietnam.com/gallery/53-worldstudy-guide-141.html</a></p>
                                <p className="hidden-xs hidden-sm">World study guide #3:<br/><a className="blue" href="http://www.sunrisevietnam.com/gallery/53-
                    world-study-guide-141.html">http://www.sunrisevietnam.com/gallery/53-
                                    world-study-guide-141.html</a></p>
                                <p className="hidden-xs hidden-sm">• Organizing education fairs, workshops, seminars, interview sessions:<br/>
                                    <a className="blue" href="http://www.sunrisevietnam.com/news/en/coming-events/internationaleducation-fair-hanoi-vietnam/457.html">http://www.sunrisevietnam.com/news/en/coming-events/internationaleducation-fair-hanoi-vietnam/457.html</a></p>
                            </div>
                            <div className="col-xs-12 visible-xs visible-sm">
                                <div className="smallspace"></div>
                                <p>World study guide #1:<br/><a className="blue" href="http://www.sunrisevietnam.com/gallery/53-
                    world-study-guide-141.html">http://www.sunrisevietnam.com/gallery/53-
                                    world-study-guide-141.html</a></p>
                                <p>World study guide #2:<br/><a className="blue" href="http://www.sunrisevietnam.com/gallery/53-worldstudy-guide-141.html">http://www.sunrisevietnam.com/gallery/53-worldstudy-guide-141.html</a></p>
                                <p>World study guide #3:<br/><a className="blue" href="http://www.sunrisevietnam.com/gallery/53-
                    world-study-guide-141.html">http://www.sunrisevietnam.com/gallery/53-
                                    world-study-guide-141.html</a></p>
                                <p>• Organizing education fairs, workshops, seminars, interview sessions:<br/>
                                    <a className="blue" href="http://www.sunrisevietnam.com/news/en/coming-events/internationaleducation-fair-hanoi-vietnam/457.html">http://www.sunrisevietnam.com/news/en/coming-events/internationaleducation-fair-hanoi-vietnam/457.html</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}