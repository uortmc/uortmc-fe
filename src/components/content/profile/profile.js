
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_img from '../../../resources/user.png'
import profile from './requests'
import alert from "../../utils/alert/alert";
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
                    <div className="card col-12" >
                        <div className="row">
                            <div className="col-4">
                                <img src={user_img} alt="ABC" className="tmc_user_img_profile tmc_patient_form_icon"/>
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.first_name+" "+this.state.last_name}</h5>
                                    <p className="card-text">{this.state.title}</p>
                                    <p className="card-text"><small className="text-muted">Online Now</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="list-example" className="list-group col-12">
                        <a className="list-group-item list-group-item-action" href="#list-item-1">Permission : Doctor</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">Enrolled Date : {this.state.enrolled_date}</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">Total Tasks : {this.state.tasks}</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Tasks Quota Left : No limit</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Tasks Montly Quota : No limit</a>
                    </div>
                </div>
            </div>
    }
}


export default Profile;
