import React from 'react';

export default class ContactUs extends React.Component{
    componentDidMount(){
        document.title = 'Contact Us | Sunrise Vietnam Co. , Ltd'
    }
    render(){
        return (
            <div className="container">
                <div className="row contactus">
                    <div className="col-xs-12 main-content">
                        <h2 className="red"><b>SUNRISE VIETNAM Co., Ltd.<br/>
                            Global Education Consultancy &amp; Training</b></h2>
                        <h5>Website:  www.sunrisevietnam.com &amp; www.sunrise.edu.vn<br/>
                            Facebook: www.facebook.com/thaiduong.vietnam<br/>
                            Email:  info@sunrisevietnam.com</h5>
                        <div className="smallspace"></div>
                        <h3><b>HANOI (HO):</b></h3>
                        <h5><img src={require("../../photos/contactus/adicon.png")}/>&nbsp; 86 Cua Bac, Ba Dinh dist. Hanoi Vietnam<br/>
                            <img src={require("../../photos/contactus/phoneicon.png")}/>&nbsp; Tel: +84 4 37224878 / 37224898<br/>
                            <img src={require("../../photos/contactus/printicon.png")}/>&nbsp; Fax: +84 4 37224855</h5>
                        <div className="smallspace"></div>
                        <h3><b>HOCHIMINH OFFICE:</b></h3>
                        <h5><img src={require("../../photos/contactus/adicon.png")}/>&nbsp; Level 7 Thanh Dung Tower, 179 Nguyen Cu Trinh str., Nguyen Cu Trinh Ward, District 1, Ho Chi Minh<br/>
                            <img src={require("../../photos/contactus/phoneicon.png")}/>&nbsp; Tel: (84-8) 38370176 - 38370226<br/>
                            <img src={require("../../photos/contactus/printicon.png")}/>&nbsp; Fax: (84-8) 38360940</h5>
                        <div className="smallspace"></div>
                        <h3><b>HAIPHONG OFFICE:</b></h3>
                        <h5>
                            <img src={require("../../photos/contactus/adicon.png")}/>&nbsp; 29 Nguyen Trai, Haiphong Vietnam<br/>
                            <img src={require("../../photos/contactus/phoneicon.png")}/>&nbsp; Tel: + (84-31) 2640689 - 3653269<br/>
                            <img src={require("../../photos/contactus/printicon.png")}/>&nbsp; Fax: + (84-31) 3732895</h5>
                    </div>
                    <div className="col-xs-12 smallspace"></div>
                </div>
            </div>
        )
    }
}