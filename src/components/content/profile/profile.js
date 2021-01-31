
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_img from '../../../resources/user.svg'
import style from './profile.css'
import profile from './requests'
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
            tasks:""
        }

        profile(this.onResponce.bind(this))
    }
    onResponce(data){
        this.setState({
            first_name:data.responce.first_name,
            last_name:data.responce.last_name,
            title:data.responce.title,
            enrolled_date:data.responce.enrolled_date,
            last_seen:data.responce.last_seen,
            online_status:data.responce.online_status,
            tasks:data.responce.tasks
        })
    }
    render() {
        return <div className="container-fluid">
                <div className="row">
                    <div className="card col-12" >
                        <div className="row">
                            <div className="col-4">
                                <img src={user_img} alt="ABC" className="tmc_user_img_profile"/>
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
