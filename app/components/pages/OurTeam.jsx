import React from 'react';

import Slide from '../Slide.jsx';

export default class OurTeam extends React.Component{
    componentDidMount(){
        document.title = 'Our Team | Sunrise Vietnam Co. , Ltd'
    }
    render(){
        return (
            <div>
                <Slide/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 main-content">
                            <h1>our team</h1>
                            <h3 className="h3-title">Management team</h3>
                        </div>
                    </div>
                    <div className="row main-content">
                        <div className="col-xs-5 col-sm-4 col-md-3">
                            <img width="100%" className="img-circle img-responsive" src={require("../../photos/ourteam/ourteam.png")}/>
                        </div>
                        <div className="col-xs-7 col-xs-offset-0 col-sm-offset-1 col-md-8">
                            <p><b className="text-uppercase">Name:</b> TRAN THI DAN (Mrs.) – C.E.O. of Sunrise Vietnam and Former
                                Vice President of VIECA (Vietnam International Education Consultants
                                Association) for two terms</p>

                            <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BA in English in Hanoi National
                                University; and BA in Economics in Foreign Trade University, Vietnam</p>

                            <p><b className="text-uppercase">Experience:</b> 17 years as education counselor; 04 years in teaching English
                                for Vietnamese</p>

                            <p><b className="text-uppercase">Professional Certificate:</b> Certificate in Direct Marketing Impactful
                                Planning &amp; Targeting by BMG in 2010; Certificate of Singapore
                                Education Specialists issued by Singapore Education in 2005 – 2006;
                                Certificate of Education UK Professional Training Course for Counselors
                                2004; Certificate of Achievement of Australian Education Specialists
                                (AES) training program 2001-2002; Certificate of International Education
                                Specialists trained by Institute of Education Management, Ministry of
                                Education and Training of Vietnam in 2014.</p>
                        </div>
                    </div>
                    <div className="row main-content">
                        <div className="col-xs-7 col-md-8">
                            <p><b className="text-uppercase">Name:</b> LUONG THI HUONG - Deputy Director</p>

                            <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BA in International Law and BA in English
                                in Institute For International Relations</p>

                            <p><b className="text-uppercase">Experience:</b> 13 years in student counseling</p>

                            <p><b className="text-uppercase">Professional Certificate:</b> Certificate of Achievement of Australian
                                Education Specialists (AES) training program 2002-2003; Professional
                                Development Programme in Promoting UK Education Training 2007;
                                Certificate of Singapore Education Specialists issued by Singapore
                                Education in 2008</p>

                            <p><b className="text-uppercase">Professional Certificate:</b> Certificate of International Education Specialists
                                trained by Institute of Education Management, Ministry of Education and
                                Training of Vietnam in 2015</p>
                        </div>
                        <div className="col-xs-5 col-xs-offset-0 col-sm-4 col-sm-offset-1 col-md-3">
                            <img width="100%" className="img-circle img-responsive right" src={require("../../photos/ourteam/ourteams.png")}/>
                        </div>
                    </div>
                    <div className="row main-content">
                        <div className="col-xs-5 col-sm-4 col-md-3">
                            <img width="100%" className="img-circle img-responsive" src={require("../../photos/ourteam/ourteam3.png")}/>
                        </div>
                        <div className="col-xs-7 col-xs-offset-0 col-sm-offset-1 col-md-8">
                            <p><b className="text-uppercase">Name:</b> PHAM THI PHUONG MAI – Vice Director of Marketing and Sales
                                Manager</p>

                            <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BA in Business English at Foreign Trade
                                University; Master of Marketing management, Solvay Brussels School of
                                Economics and Management, ULB</p>

                            <p><b className="text-uppercase">Experience:</b> 06 year in student counseling</p>

                            <p><b className="text-uppercase">Professional Certificate:</b> Certificate of International Education Specialists
                                trained by Institute of Education Management, Ministry of Education and
                                Training of Vietnam in 2014</p>
                        </div>
                    </div>
                    <div className="smallspace"></div>
                </div>
                <div className="bglgray">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12"><h3 className="h3-title">hanoi team</h3></div>
                        </div>
                        <div className="smallspace"></div>
                    </div>
                    <div>
                        <img src={require("../../photos/ourteam/hnteam.png")} className="img-responsive"/>
                        <div className="space"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="col-xs-10 ourteam nopadleft marginleft bgorange"></div>
                                <div className="col-xs-3 nopadleft"><h1 className="ourteam-num">#1</h1></div>
                                <div className="col-xs-9 nopadleft fullheight">
                                    <h3 className="text-uppercase"><b>le kieu trang</b></h3>
                                    <h3>Counselor Manager</h3></div>
                                <div className="col-xs-12 nopadleft main-content">
                                    <p><b className="text-uppercase">Name:</b> LE KIEU TRANG – Counselor Manager</p>
                                    <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BA in English and BA in German at Hanoi
                                        National University, Vietnam</p>
                                    <p><b className="text-uppercase">Experience:</b> 13 years in student counseling</p>
                                    <p><b className="text-uppercase">Professional Certificate:</b> Certificate of Education Agent Training program
                                        in Hanoi on 15 December 2003 issued by New Zealand Immigration
                                        Service; Certificate of Achievement of Australian Education Specialists
                                        (AES) training program 2004-2005; Professional Development
                                        Programme in Promoting UK Education Training 2008; Certificate of
                                        International Education Specialists trained by Institute of Education
                                        Management, Ministry of Education and Training of Vietnam in 2014</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="col-xs-10 nopadright marginleft ourteam bgorange"></div>
                                <div className="col-xs-3 nopadright"><h1 className="ourteam-num">#2</h1></div>
                                <div className="col-xs-9 nopadright fullheight">
                                    <h3 className="text-uppercase"><b>nguyen thi thu thao</b></h3>
                                    <h3>Education Counselor</h3></div>
                                <div className="col-xs-12 nopadright main-content">
                                    <p><b className="text-uppercase">Name:</b> NGUYEN THI THU THAO – Education Counselor</p>

                                    <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BA in English at Hanoi National University
                                    </p>

                                    <p><b className="text-uppercase">Experience:</b> 04 year in student counseling;
                                        Professional Certificate: Certificate of International Education Specialists
                                        trained by Institute of Education Management, Ministry of Education and
                                        Training of Vietnam in 2014</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="col-xs-10 nopadleft marginleft ourteam bgorange"></div>
                                <div className="col-xs-3 nopadleft"><h1 className="ourteam-num">#3</h1></div>
                                <div className="col-xs-9 nopadleft fullheight">
                                    <h3 className="text-uppercase"><b>hoang thi minh phuong</b></h3>
                                    <h3>Education Counselor</h3></div>
                                <div className="col-xs-12 nopadleft main-content">
                                    <p><b className="text-uppercase">Name:</b> HOANG THI MINH PHUONG – Education Counselor</p>

                                    <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> Bachelor of Art in English at Hanoi Open
                                        University</p>

                                    <p><b className="text-uppercase">Professional Certificate:</b> Certificate of International Education
                                        Specialists
                                        trained by Institute of Education Management, Ministry of Education and
                                        Training of Vietnam in 2015</p>

                                    <p><b className="text-uppercase">Experience:</b> 01 year in student counseling</p>

                                    <p><b className="text-uppercase">Professional Certificate:</b> Certificate of International Education
                                        Specialists
                                        trained by Institute of Education Management, Ministry of Education and
                                        Training of Vietnam in 2014</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="col-xs-10 nopadright marginleft ourteam bgorange"></div>
                                <div className="col-xs-3 nopadright"><h1 className="ourteam-num">#4</h1></div>
                                <div className="col-xs-9 nopadright fullheight">
                                    <h3 className="text-uppercase"><b>LE THUY LINH</b></h3>
                                    <h3>Senior Education Counselor</h3></div>
                                <div className="col-xs-12 nopadright main-content">
                                    <p><b className="text-uppercase">Name:</b> LE THUY LINH – Senior Education Counselor</p>
                                    <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> Higher Diploma in Business and
                                        Hospitality at Holm Institute, Melbourne, Australia</p>
                                    <p><b className="text-uppercase">Experience:</b> 02 year in student counseling</p>
                                    <p><b className="text-uppercase">Professional Certificate:</b> Certificate of International Education
                                        Specialists
                                        trained by Institute of Education Management, Ministry of Education and
                                        Training of Vietnam in 2014</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="col-xs-10 nopadleft marginleft ourteam bgorange"></div><div className="col-xs-1 ourteam"></div>
                                <div className="col-xs-3 nopadleft col-sm-2"><h1 className="ourteam-num"><b>#5</b></h1></div>
                                <div className="col-xs-9 nopadleft col-sm-4 fullheight">
                                    <div className="hidden-xs smallspace"></div>
                                    <h3 className="text-uppercase"><b>LE TRONG VINH</b></h3>
                                    <h3>Education Counselor</h3></div>
                                <div className="col-xs-12 nopadleft col-sm-6 main-content">
                                    <div className="hidden-xs smallspace"></div>
                                    <p><b className="text-uppercase">Name:</b> LE TRONG VINH –Education Counselor</p>

                                    <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BA in International Business at Foreign
                                        Trade University</p>

                                    <p><b className="text-uppercase">Experience:</b> 01 year in student counseling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="smallspace"></div>
                    <div className="row">
                        <div className="col-xs-12"><h3 className="h3-title">ho chi minh team</h3></div>
                    </div>
                    <div className="smallspace"></div>
                </div>
                <div>
                    <img src={require("../../photos/ourteam/hcmteam.png")} className="img-responsive"/>
                    <div className="space"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="col-xs-10 nopadleft marginleft ourteam bgorange"></div>
                            <div className="col-xs-3 nopadleft"><h1 className="ourteam-num">#1</h1></div>
                            <div className="col-xs-9 nopadleft fullheight">
                                <h3 className="text-uppercase"><b>TA NGOC VAN</b></h3>
                                <h3>Branch Director</h3></div>
                            <div className="col-xs-12 nopadleft main-content">
                                <p><b className="text-uppercase">Name:</b> TA NGOC VAN – Branch Director</p>

                                <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BA in English in University of Foreign
                                    Languages – Hanoi National University (Ho Chi Minh campus), Higher
                                    Diploma in Primary Education Teacher Training in KienGiang College of
                                    Education &amp; Training</p>

                                <p><b className="text-uppercase">Experience:</b> 11 years in student counseling, 04 years in teaching at
                                    Primary Education level</p>

                                <p><b className="text-uppercase">Professional Certificate:</b> Certificate in Direct Marketing Impactful
                                    Planning &amp; Targeting by BMG in 2010; Certificate of International
                                    Education Specialists trained by Institute of Education Management,
                                    Ministry of Education and Training of Vietnam in 2014</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="col-xs-10 nopadright marginleft ourteam bgorange"></div>
                            <div className="col-xs-3 nopadright"><h1 className="ourteam-num">#2</h1></div>
                            <div className="col-xs-9 nopadright fullheight">
                                <h3 className="text-uppercase"><b>PHAM THI PHUONG THUY</b></h3>
                                <h3>Education Counselor</h3></div>
                            <div className="col-xs-12 nopadright main-content">
                                <p><b className="text-uppercase">Name:</b> PHAM THI PHUONG THUY –Education Counselor</p>

                                <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BSc (Hons) in Business and Management
                                    (Awarded by the University of Buckingham – UK)</p>

                                <p><b className="text-uppercase">Experience:</b> 02 year in student counseling</p>

                                <p><b className="text-uppercase">Professional Certificate:</b> Certificate of International Education Specialists
                                    trained by Institute of Education Management, Ministry of Education and
                                    Training of Vietnam in 2014</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="col-xs-10 nopadleft marginleft ourteam bgorange"></div>
                            <div className="col-xs-3 nopadleft"><h1 className="ourteam-num">#3</h1></div>
                            <div className="col-xs-9 nopadleft fullheight">
                                <h3 className="text-uppercase"><b>VO THI KIM PHUONG</b></h3>
                                <h3>Education Counselor</h3></div>
                            <div className="col-xs-12 nopadleft main-content">
                                <p><b className="text-uppercase">Name:</b> VO THI KIM PHUONG – Education Counselor</p>

                                <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> Higher Diploma in International Hotel
                                    Management at Vietnam Australia Advanced College of Hotel
                                    Management</p>

                                <p><b className="text-uppercase">Experience:</b> 01 years in student counseling</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="col-xs-10 nopadright marginleft ourteam bgorange"></div>
                            <div className="col-xs-3 nopadright"><h1 className="ourteam-num">#4</h1></div>
                            <div className="col-xs-9 nopadright fullheight">
                                <h3 className="text-uppercase"><b>NGUYEN THI HOA MY</b></h3>
                                <h3>Office Assistant</h3></div>
                            <div className="col-xs-12 nopadright main-content">
                                <p><b className="text-uppercase">Name:</b> NGUYEN THI HOA MY – Office Assistant</p>

                                <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BA in English in Quy Nhon University
                                    Experience: 04 years in student counseling</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bglgray">
                    <div className="container">
                        <div className="smallspace"></div>
                        <div className="row">
                            <div className="col-xs-12"><h3 className="h3-title">hai phong team</h3></div>
                        </div>
                        <div className="smallspace"></div>
                    </div>
                    <div>
                        <img src={require("../../photos/ourteam/hpteam.png")} className="img-responsive"/>
                        <div className="space"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="col-xs-10 nopadleft marginleft ourteam bgorange"></div><div className="col-xs-1 ourteam"></div>
                                <div className="col-xs-3 col-sm-2"><h1 className="ourteam-num">#1</h1></div>
                                <div className="col-xs-9 col-sm-4 fullheight">
                                    <div className="hidden-xs smallspace"></div>
                                    <h3 className="text-uppercase"><b>NGUYEN BICH NGAN</b></h3>
                                    <h3>Branch Director</h3></div>
                                <div className="col-xs-12 col-sm-6 main-content">
                                    <div className="hidden-xs smallspace"></div>
                                    <p><b className="text-uppercase">Name:</b> NGUYEN BICH NGAN - Haiphong city Branch Director</p>
                                    <p><b className="text-uppercase">Qualifications &amp; Institutions:</b> BA in English at Hanoi National
                                        University
                                        – College of Foreign Languages Teachers Training</p>
                                </div>
                            </div>
                        </div>
                        <div className="smallspace"></div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="col-xs-10 nopadleft marginleft ourteam bgorange"></div>
                                <div className="col-xs-3 nopadleft"><h1 className="ourteam-num">#2</h1></div>
                                <div className="col-xs-9 nopadleft fullheight">
                                    <h3 className="text-uppercase"><b>DO NHAT QUYNH</b></h3>
                                    <h3>Education Manager</h3></div>
                                <div className="col-xs-12 nopadleft main-content">
                                    <p><b className="text-uppercase">Name:</b> DO NHAT QUYNH – Education Manager</p>
                                    <p><b className="text-uppercase">Qualification:</b> Diploma from Haiphong Culture and Art College</p>
                                    <p><b className="text-uppercase">Experience:</b> 01 years in student counseling</p>
                                    <p><b className="text-uppercase">Professional Certificate:</b> Certificate of International Education
                                        Specialists
                                        trained by Institute of Education Management, Ministry of Education and
                                        Training of Vietnam in 2015</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="col-xs-10 nopadleft marginleft ourteam bgorange"></div>
                                <div className="col-xs-3 nopadright"><h1 className="ourteam-num">#3</h1></div>
                                <div className="col-xs-9 nopadright fullheight">
                                    <h3 className="text-uppercase"><b>THI THUY THUY LINH</b></h3>
                                    <h3>Education Counselor</h3></div>
                                <div className="col-xs-12 nopadright main-content">
                                    <p><b className="text-uppercase">Name:</b> THI THUY THUY LINH – Education counselor</p>

                                    <p><b className="text-uppercase">Qualification:</b> BA in English at Haiphong University</p>

                                    <p><b className="text-uppercase">Experience:</b> 01 years in student counseling</p>

                                    <p><b className="text-uppercase">Professional Certificate:</b> Certificate of International Education
                                        Specialists
                                        trained by Institute of Education Management, Ministry of Education and
                                        Training of Vietnam in 2015</p>
                                </div>
                            </div>
                        </div>
                        <div className="smallspace"></div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>And other members in support team.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space"></div>
                </div>
            </div>
        )
    }
}