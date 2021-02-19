
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_img from '../../../resources/user.png'
import profile from './requests'
import alert from "../../utils/alert/alert";
import './profile.css'
import Content_header from "../../../etc/ContentHeader/content_header";
import scan_img from "../../../resources/scan.png";
class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            first_name:"",
            last_name:"",
            title:"",
            enrolled_date:"",
            last_seen:"",
            online_status:"",
            tasks:"",
            alert:<div/>
        }

        profile(
            this.onResponce.bind(this),
            this.onApiError.bind(this),
            this.onError.bind(this)
        )
    }
    onResponce(data){
        this.setState({
            first_name:data.first_name,
            last_name:data.last_name,
            title:data.title,
            enrolled_date:data.enrolled_date,
            last_seen:data.last_seen,
            online_status:data.online_status,
            tasks:data.tasks
        })
    }
    onAlertCloseCallback(){
        this.setState({
            alert:<div/>
        })
    }
    onApiError(responce){
        this.setState({
            alert:alert("Operation Failed"+responce.reason,this.onAlertCloseCallback.bind(this))
        })
        console.log("APIERR")
    }
    onError(err){
        this.setState({
            alert:alert("Operation Failed "+err,this.onAlertCloseCallback.bind(this))
        })
        console.log("Err")
    }
    render() {
        return <div className="container-fluid">
                {this.state.alert}
                <div className="row">
                    <Content_header img={user_img}
                                    message="My profile"
                    />
                </div>
                <div className="row">
                    <div id="list-example" className="list-group tmc_pv_list_group col-12">
                        <a className="list-group-item list-group-item-action" href="#list-item-1">
                            <form className="form-inline tmc_pv_form_fullspan">
                                <div className="container">
                                    <div className="row">
                                        <span className="input-group-text col-2" id="basic-addon1">Type</span>
                                        <input type="text" className="form-control col-10" disabled placeholder="Doctor"
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
                                        <span className="input-group-text col-2" id="basic-addon1">Title</span>
                                        <input type="text" className="form-control col-10" disabled placeholder={this.state.title}
                                               aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                            </form>
                        </a>
                        <a className="list-group-item list-group-item-action" href="#list-item-1">
                            <form className="form-inline tmc_pv_form_fullspan">
                                <div className="container">
                                    <div className="row">
                                        <span className="input-group-text col-2" id="basic-addon1">Tasks</span>
                                        <input type="text" className="form-control col-10" disabled placeholder={this.state.tasks}
                                               aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                            </form>
                        </a>
                        <a className="list-group-item list-group-item-action" href="#list-item-1">
                            <form className="form-inline tmc_pv_form_fullspan">
                                <div className="container">
                                    <div className="row">
                                        <span className="input-group-text col-2" id="basic-addon1">Task quota</span>
                                        <input type="text" className="form-control col-10" disabled placeholder={"No limit"}
                                               aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                            </form>
                        </a>
                        <a className="list-group-item list-group-item-action" href="#list-item-1">
                            <form className="form-inline tmc_pv_form_fullspan">
                                <div className="container">
                                    <div className="row">
                                        <span className="input-group-text col-2" id="basic-addon1">Tasks left</span>
                                        <input type="text" className="form-control col-10" disabled placeholder={"Infinite"}
                                               aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                            </form>
                        </a>
                        <a className="list-group-item list-group-item-action" href="#list-item-1">
                            <form className="form-inline tmc_pv_form_fullspan">
                                <div className="container">
                                    <div className="row">
                                        <span className="input-group-text col-2" id="basic-addon1">Enrolled date</span>
                                        <input type="text" className="form-control col-10" disabled placeholder={this.state.enrolled_date}
                                               aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                            </form>
                        </a>
                    </div>
                </div>
            </div>
    }
}


export default Profile;
