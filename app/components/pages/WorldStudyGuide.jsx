import React from 'react';
import {Link} from 'react-router';

import Slide from '../Slide.jsx';

export default class WorldStudyGuide extends React.Component{
    componentDidMount(){
        document.title = 'World Study Guide | Sunrise Vietnam Co. , Ltd'
    }
    render(){

        return <div>
            <Slide/>
            <div className="container">
                <div className="col-xs-12 main-content">
                    <h1>world study guide</h1>
                    <p>**World Study Guide is annual publication of Sunrise Vietnam. In this Guide book, parents andstudents can find essential information related to study oversea from experience of our consultant and students. The Guide book is printed with 10,000 copies and free hand out to our universities and high schools partners in Hanoi, Ho Chi Minh and Hai Phong. Students from other cities can download the PDF copy via our website www.sunrisevietnam.com</p>
                    <p>**If you want your school's image and message reach Vietnamese parents and students, you can  put Advertisment or PR articles on World Study Guide. The Discount Rate is applied for  registration prior Nov 31st, 2015 or confirmation to attend Sunrise Vietnam World Study Fair  2016. The Guide Book is planned to print out in Febuary 2016. Please contact us at  mai.pp@sunrisevietnam.com (Ms. Mai)</p>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <a className="mgray" href="http://www.mediafire.com/download/d8plfwcrmv2cc96/WORLD_STUDY_GUIDE+2012.pdf" target="_blank"><img className="center-block img-responsive"  src={require("../../photos/guide/1.png")} alt="World Study Guide I"/>
                        <p className="guidetext text-center">World Study Guide I</p>
                    </a>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <a className="mgray" href="http://www.mediafire.com/download/d9u15uviygasb21/WSG_2013_fin.pdf" target="_blank"><img className="center-block img-responsive"  src={require("../../photos/guide/2.png")} alt="World Study Guide II"/>
                        <p className="guidetext text-center">World Study Guide II</p>
                    </a>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <a className="mgray" href="http://www.mediafire.com/view/swc9m2atn7fxaz6/WSG_2014_fin.pdf" target="_blank"><img className="center-block img-responsive"  src={require("../../photos/guide/3.png")} alt="World Study Guide III"/>
                        <p className="guidetext text-center">World Study Guide III</p></a>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <img className="center-block img-responsive"  src={require("../../photos/guide/4.png")} alt="World Study Guide IV"/>
                    <p className="guidetext text-center">World Study Guide IV</p>
                </div>
                <div className="col-xs-12 text-center">
                    <Link to="register-fair" className="btn btnregister bgorange white"><h3><b>REGISTER</b></h3></Link>
                    <div className="space"></div>
                </div>
            </div>
        </div>
    }
}