
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NinoVerifier from "../../../etc/utils";
import NewScanRequests from "../new_scan/requests";
import alert from "../../utils/alert/alert";
import scan_img from "../../../resources/scan.png";
import new_patient from "../new_patient/requests";
import user_img from "../../../resources/user.png";


class PatientView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            nino:props.nino,
            comments:"",
            enrolledDate:"",
            alert:<div/>
        }
    }
    onSubmit(e) {

    }
    onSuccess(responce){
        this.setState({
            alert:alert("Operation Completed",this.onCloseCallback.bind(this))
        })
        console.log(responce)
    }
    onAPIFailure(responce){
        this.setState({
            alert:alert("Operation Failed: "+responce.reason,this.onCloseCallback.bind(this))
        })
        console.log(responce)
    }
    onGenericFailure(msg){
        this.setState({
            alert:alert("Operation Failed: "+msg,this.onCloseCallback.bind(this))
        })
        console.log(msg)
    }
    onCloseCallback(e){
        this.setState({
            alert:<div/>
        })
    }

    render() {
        return <div className="container-fluid">
            {this.state.alert}
            <div className="row">
                <div className="card col-12" >
                    <div className="row">
                        <div className="col-4">
                            <img src={user_img} alt="ABC" className="tmc_user_img_profile tmc_patient_form_icon"/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h2 className="card-title">
                                    Patient View
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="list-example" className="list-group col-12">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Type</span>
                                    <input type="text" className="form-control col-10" disabled placeholder="Patient"
                                               aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">First name</span>
                                    <input type="text" className="form-control col-10" disabled placeholder=""
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Last name</span>
                                    <input type="text" className="form-control col-10" disabled placeholder=""
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Enrolled Date</span>
                                    <input type="text" className="form-control col-10" disabled placeholder=""
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Nino</span>
                                    <input type="text" className="form-control col-10" disabled placeholder=""
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Comments</span>
                                    <textarea type="text" className="form-control col-10" placeholder=""
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">
                        <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Create New Patient</button>
                    </a>
                </div>
            </div>
        </div>
    }
}


export default PatientView;