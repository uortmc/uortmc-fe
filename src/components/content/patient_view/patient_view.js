
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import alert from "../../utils/alert/alert";
import user_img from "../../../resources/user.png";
import MyScans from "../my_scans/my_scans";
import setComment from "./requests";
import './patient_view.css'

class PatientView extends React.Component {

    constructor(props) {
        super(props);
        this.setContent=this.props.setContent
        this.state={
            first_name:this.props.first_name,
            last_name:this.props.last_name,
            nino:this.props.nino,
            comments:this.props.comments,
            enrolled_date:this.props.enrolled_date,
            alert:<div/>
        }
    }

    onSubmit(e) {
        setComment(
            this.onSuccess.bind(this),
            this.onAPIFailure.bind(this),
            this.onGenericFailure.bind(this),
            this.state.nino,
            this.state.comments
        )
    }
    onViewScansSubmit(e){
        this.setContent(<MyScans search={this.state.nino} setContent={this.setContent}/>)
    }
    onCommentChange(e){
        console.log("Hello")
        this.setState({
            comments:e.target.value
        })
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
        return <div className="container-fluid tmc_pv_container_fluid">
            {this.state.alert}
            <div className="row">
                <div className="card col-12" >
                    <div className="row">
                        <div className="col-4">
                            <img src={user_img} alt="ABC" className="tmc_pv_user_img_profile"/>
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
                <div id="list-example" className="list-group tmc_pv_list_group col-12">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_pv_form_fullspan">
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
                        <form className="form-inline tmc_pv_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">First name</span>
                                    <input type="text" className="form-control col-10" disabled placeholder={this.state.first_name}
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_pv_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Last name</span>
                                    <input type="text" className="form-control col-10" disabled placeholder={this.state.last_name}
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_pv_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Nino</span>
                                    <input type="text" className="form-control col-10" disabled placeholder={this.state.nino}
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_pv_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Enrolled Date</span>
                                    <input type="text" className="form-control col-10" disabled placeholder={this.state.enrolled_date}
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_pv_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Comments</span>
                                    <textarea className="form-control col-10" value={this.state.comments}
                                           aria-label="Username" aria-describedby="basic-addon1" onChange={this.onCommentChange.bind(this)}/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">
                        <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Save Changes</button>
                        <button className="btn btn-primary float-right" onClick={this.onViewScansSubmit.bind(this)}>View Scans</button>
                    </a>

                </div>
            </div>
        </div>
    }
}


export default PatientView;
