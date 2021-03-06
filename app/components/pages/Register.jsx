import React from 'react';

import Modal from 'react-bootstrap-modal';
import _ from 'underscore';
import DDP from 'ddp.js';
import RadioGroup from 'react-radio-group';

let _locations = require('json!../../fair.locations.json').Locations;

const _formObj = {
    nameOfInstitution: '',
    contactPerson: '',
    address: '',
    phoneNumber: '',
    faxNumber: '',
    email: '',
    website: '',
    typeOfInstitution: '',
    typeOfInstitutionOther: '',
    locations: [],
    totalFee: 0,
    isModalOpen: false
}

const socketServer = 'ws://system.sunrisevietnam.com/websocket';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = _.clone(_formObj);

        this._handle_nameOfInstitution = this._handle_nameOfInstitution.bind(this);
        this._handle_contactPerson = this._handle_contactPerson.bind(this);
        this._handle_address = this._handle_address.bind(this);
        this._handle_phoneNumber = this._handle_phoneNumber.bind(this);
        this._handle_faxNumber = this._handle_faxNumber.bind(this);
        this._handle_email = this._handle_email.bind(this);
        this._handle_website = this._handle_website.bind(this);
        this._handle_typeOfInstitution = this._handle_typeOfInstitution.bind(this);
        this._handle_typeOfInstitutionOther = this._handle_typeOfInstitutionOther.bind(this);
        this._handle_chooseLocations = this._handle_chooseLocations.bind(this);

        this._isFormValid = this._isFormValid.bind(this);
        this._resetForm = this._resetForm.bind(this);
        this._handle_Submit = this._handle_Submit.bind(this);
        this._closeModal = this._closeModal.bind(this);
    }

    _handle_Submit() {
        try {
            if (this.ddp) {
                let self = this;
                let obj = _.omit(this.state, 'isOpenModal');
                let msgId = this.ddp.method('bookingFair', [obj]);
                this.ddp.on('result', function (msg) {
                    if (msgId === msg.id && !msg.error) {
                        self.setState({
                            isOpenModal: true
                        });
                    }
                })
            }
        } catch (ex) {
            console.log('Error', ex);
        }
    }

    _isFormValid() {
        let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = this.state.nameOfInstitution && this.state.contactPerson && this.state.address && this.state.phoneNumber && regEmail.test(this.state.email) && (this.state.locations.length > 0);
        let isTypeOfInstitutionEqualOther = this.state.typeOfInstitution === 'Other';

        return (!isTypeOfInstitutionEqualOther) ? isValid && this.state.typeOfInstitution : this.state.typeOfInstitutionOther;
    }

    _resetForm() {
        $('input:checkbox').parent().parent().parent().parent().removeClass("box");
        this.setState({
            locations: []
        });
    }

    _closeModal() {
        this.setState(_.clone(_formObj));
        this.props.history.pushState(null, "/");
    }

    _handle_nameOfInstitution(e) {
        let _val = e.target.value.toUpperCase();
        this.setState({
            nameOfInstitution: _val
        })
    }

    _handle_contactPerson(e) {
        this.setState({
            contactPerson: e.target.value
        })
    }

    _handle_address(e) {
        this.setState({
            address: e.target.value
        })
    }

    _handle_phoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    _handle_faxNumber(e) {
        this.setState({
            faxNumber: e.target.value
        })
    }

    _handle_email(e) {
        this.setState({
            email: e.target.value
        })
    }

    _handle_website(e) {
        this.setState({
            website: e.target.value
        })
    }

    _handle_typeOfInstitution(e) {
        this.setState({
            typeOfInstitution: e.target.value
        })
    }

    _handle_typeOfInstitutionOther(e) {
        this.setState({
            typeOfInstitutionOther: e.target.value
        })
    }

    _handle_chooseLocations(location, addOrRemove) {
        var __locations = this.state.locations;
        var totalFee = this.state.totalFee || 0;

        if (addOrRemove === 'added') {
            var _loc = _.findWhere(_locations, {id: location.id}) || {};
            __locations.push(_.extend(_loc, location));
        } else if (addOrRemove === 'changed') {
            __locations = _.map(__locations, function (loc) {
                if (loc.id === location.id) {
                    loc.interpreterRequired = location.interpreterRequired
                }
                return loc;
            })
        }
        else {
            __locations = _.without(__locations, _.findWhere(__locations, {id: location.id})) || [];
        }

        /*totalFee = _.reduce(_.map(__locations, function (l) {
            return l.fee
        }), function (a, b) {
            return a + b
        }, 0);*/

        /*this.setState({
            totalFee: totalFee
        });*/

        this.setState({
            locations: __locations
        });

        //console.info(__locations);
    }

    componentDidMount() {
        let options = {
            endpoint: socketServer,
            SocketConstructor: WebSocket
        };

        this.ddp = new DDP(options);
        this.ddp.on("connected", function () {
            console.info("Connected to Server...");
        });

        document.title = 'Register Fair | Sunrise Vietnam Co. , Ltd';
        $('input:checkbox').change(function () {
            if ($(this).is(":checked")) {
                $(this).parent().parent().parent().parent().addClass("box");

            } else {
                $(this).parent().parent().parent().parent().removeClass("box");

            }
        });

        $('input:radio').change(function () {
            if ($(this).attr("value") == "Other") {
                $("#othertype").show();
            }
            else {
                $("#othertype").hide();
            }
        });
    }

    render() {
        let self = this;
        let locationOutput = _.map(_locations, function (location) {
            return <RegisterLocation location={location} key={location.id}
                                     onChooseLocation={self._handle_chooseLocations}/>
        });

        let _disabled = {};
        if (!this._isFormValid()) {
            _disabled['disabled'] = 'disabled';
        }


        return (
            <div>
                <h2 className="text-center"><b>Educational Institution's Booking Form</b></h2>

                <div className="smallspace"></div>
                <div className="container">
                    <form data-toggle="validator" role="form" id="dangkyform" className="form-horizontal">
                        <div className="panel panel-info">
                            <div className="panel-heading"><h3><b>Section 1 - Institution</b></h3></div>
                            <div className="panel-body">
                                <div className="form-group col-xs-12">
                                    <label><b>Name of Institution</b>: <span className="asterisk">(*)</span></label>

                                    <div className="input-group col-xs-12">
                                        <input aria-describedby="nameinst" type="text" className="form-control"
                                               id="tentruong"
                                               value={this.state.nameOfInstitution}
                                               onChange={this._handle_nameOfInstitution}/>
                                    </div>
                                </div>

                                <div className="form-group col-xs-12">
                                    <label>Contact person: <span className="asterisk">(*)</span></label>

                                    <div className="input-group col-xs-12">
                                        <input aria-describedby="name" type="text" className="form-control"
                                               id="hoten" value={this.state.contactPerson}
                                               onChange={this._handle_contactPerson}/>
                                    </div>
                                </div>

                                <div className="form-group col-xs-12">
                                    <label>Address: <span className="asterisk">(*)</span></label>

                                    <div className="input-group col-xs-12">
                                        <textarea cols="30" rows="2" className="form-control" value={this.state.address}
                                                  onChange={this._handle_address}></textarea>
                                    </div>
                                </div>
                                <div className="form-group col-xs-12">
                                    <div className="col-xs-12 col-sm-6 nopadleft nopad">
                                        <label>Tel: <span className="asterisk">(*)</span></label>

                                        <div className="input-group col-xs-12">
                                            <input aria-describedby="tel" type="text" pattern="^[+0-9; ]{1,}$"
                                                   className="form-control" id="sodt" value={this.state.phoneNumber}
                                                   onChange={this._handle_phoneNumber}/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 nopadright nopad">
                                        <label>Fax:</label>

                                        <div className="input-group col-xs-12">
                                            <input aria-describedby="faxx" type="text" pattern="^[+0-9; ]{1,}$"
                                                   className="form-control" id="fax" value={this.state.faxNumber}
                                                   onChange={this._handle_faxNumber}/>

                                        </div>
                                    </div>
                                </div>

                                <div className="form-group col-xs-12">
                                    <div className="col-xs-12 col-sm-6 nopadleft nopad">
                                        <label>Email: <span className="asterisk">(*)</span></label>

                                        <div className="input-group col-xs-12">
                                            <input aria-describedby="mail" type="email" className="form-control"
                                                   id="email"
                                                   value={this.state.email} onChange={this._handle_email}/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 nopadright nopad">
                                        <label>Web:</label>

                                        <div className="input-group col-xs-12">
                                            <input aria-describedby="web" type="text" className="form-control"
                                                   id="website"
                                                   value={this.state.website} onChange={this._handle_website}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group col-xs-12">
                                    <label><b>Type of Institue: <span className="asterisk">(*)</span></b></label>

                                    <div className="form-group">
                                        <div className="radio col-xs-12 col-sm-4">
                                            <label className="radio-inline">
                                                <input type="radio" name="typeinst"
                                                       id="typeinst1" value="University"
                                                       onChange={this._handle_typeOfInstitution}/>
                                                University
                                            </label>
                                        </div>

                                        <div className="radio col-xs-12 col-sm-4">
                                            <label className="radio-inline">
                                                <input type="radio" name="typeinst"
                                                       id="typeinst2" value="College"
                                                       onChange={this._handle_typeOfInstitution}/>
                                                College
                                            </label>
                                        </div>

                                        <div className="radio col-xs-12 col-sm-4">
                                            <label className="radio-inline">
                                                <input type="radio" name="typeinst"
                                                       id="typeinst3"
                                                       value="Vocational Institution"
                                                       onChange={this._handle_typeOfInstitution}/>
                                                Vocational Institution
                                            </label>
                                        </div>

                                        <div
                                            className="radio col-xs-12 col-sm-4">
                                            <label className="radio-inline">
                                                <input type="radio"
                                                       name="typeinst"
                                                       id="typeinst4"
                                                       value="High School" onChange={this._handle_typeOfInstitution}/>
                                                High
                                                School
                                            </label>
                                        </div>

                                        <div
                                            className="radio col-xs-12 col-sm-4">
                                            <label className="radio-inline">
                                                <input type="radio"
                                                       name="typeinst"
                                                       id="typeinst5"
                                                       value="Language Centre"
                                                       onChange={this._handle_typeOfInstitution}/>
                                                Language Centre
                                            </label>
                                        </div>

                                        <div
                                            className="radio col-xs-12 col-sm-4">
                                            <label className="radio-inline">
                                                <input type="radio"
                                                       name="typeinst"
                                                       id="typeinst6"
                                                       value="Other" onChange={this._handle_typeOfInstitution}/>
                                                Other (please
                                                specify)
                                            </label>
                                        </div>
                                    </div>
                                    <input type="text"
                                           className="form-control col-xs-12"
                                           id="othertype"
                                           placeholder="" value={this.state.typeOfInstitutionOther}
                                           onChange={this._handle_typeOfInstitutionOther}/>
                                </div>

                            </div>
                        </div>

                        <div className="panel panel-danger">
                            <div className="panel-heading"><h3>
                                <b>Section 2 - Location(s)</b> <span className="asterisk">(*)</span>
                            </h3></div>
                            <div className="panel-body">
                                <div className="row">
                                    {locationOutput}
                                </div>

                            </div>
                        </div>
                        <div
                            className="form-group">
                            <div
                                className="col-xs-12 text-center">
                                <button
                                    type="button"
                                    className="btn btnregister bgblue white"
                                    id="dkbtn" {..._disabled} onClick={this._handle_Submit}>
                                    <h3>
                                        REGISTER</h3>
                                </button>
                                <button
                                    type="reset"
                                    className="btn btnregister bgorange white"
                                    onClick={this._resetForm}>
                                    <h3>
                                        RESET</h3>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <Modal show={this.state.isOpenModal} backdrop="static" onHide={this._closeModal}
                       aria-labelledby="ModalHeader">
                    <Modal.Header closeButton>
                        <Modal.Title id='ModalHeader'>Registered successfully</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{"textTransform" : "none !important;"}}>
                            <h5>Thank you for register.</h5>
                            <h5>We will contact you shortly.</h5>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-primary' onClick={this._closeModal}>
                            OK!
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

class RegisterLocation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.location.id,
            checkedThis: false,
            fee: this.props.location.fee,
            interpreterRequired: false
        }

        this._handle_interpreterRequired = this._handle_interpreterRequired.bind(this);
        this._handle_checkedThis = this._handle_checkedThis.bind(this);
    }

    _handle_interpreterRequired(value) {
        this.setState({
            interpreterRequired: value
        });

        if (this.state.checkedThis === true) {
            var location = _.omit(this.state, 'checkedThis');
            location = _.extend(location, {interpreterRequired: value});
            this.props.onChooseLocation(location, 'changed');
        }
    }

    _handle_checkedThis(e) {
        this.setState({
            checkedThis: e.target.checked
        });

        if (this.state.checkedThis === true) {
            this.setState({
                interpreterRequired: false
            })
        }

        var location = _.omit(this.state, 'checkedThis');
        var addOrRemove = (e.target.checked === true) ? 'added' : 'remove';
        this.props.onChooseLocation(location, addOrRemove);
    }

    render() {
        let radioName = 'Interpreter' + _.uniqueId();
        let checkboxName = 'checkThis' + _.uniqueId();
        return (
            <div
                className="col-xs-12 col-sm-4">
                <div
                    className="panel panel-default">
                    <label>We
                        wish
                        to
                        attend</label>

                    <div
                        className="checkbox">
                        <label
                            className="text-uppercase">
                            <h5>
                                <input
                                    type="checkbox"
                                    name={checkboxName} value={this.state.checkedThis} checked={this.state.checkedThis}
                                    onChange={this._handle_checkedThis}/>
                                {this.props.location.name}</h5>
                        </label>
                    </div>

                    <p>
                        <b>{this.props.location.date}</b>
                    </p>

                    <p>
                        <b>{this.props.location.address}</b>
                    </p>

                    <p>
                        {this.props.location.sub_address}</p>
                    <label>Interpreter required:</label>

                    <RadioGroup name={radioName} selectedValue={this.state.interpreterRequired}
                                onChange={this._handle_interpreterRequired}>
                        {Radio => (
                            <div>
                                <label className="radio-inline"><Radio value={true}/> Yes</label>
                                <label className="radio-inline"><Radio value={false} checked/> No</label>
                            </div>
                        )

                        }
                    </RadioGroup>
                </div>
            </div>
        )
    }
}