
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_img from '../../../resources/user.svg'
import style from './profile.css'
class Profile extends React.Component{
    constructor(props) {
        super(props);
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
                                    <h5 className="card-title">Dr. Jonh Doe</h5>
                                    <p className="card-text">Associated Radiologist: St Mary's Hospital</p>
                                    <p className="card-text"><small className="text-muted">Online Now</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="list-example" className="list-group col-12">
                        <a className="list-group-item list-group-item-action" href="#list-item-1">Permission : User</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">Enrolled Date : {new Date().toDateString()}</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">Total Tasks : 231</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Tasks Quota Left : 32</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Tasks Montly Quota : 40</a>
                    </div>
                </div>
            </div>
    }
}


export default Profile;
