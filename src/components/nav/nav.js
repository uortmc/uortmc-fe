
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_img from '../../resources/user.svg'
import style from './nav.css'
import Profile from "../content/profile/profile";
import Home from "../content/home/home";
import Notifications from "../content/notifications/notifications";

import Requests from "./requests";
import alert from "../utils/alert/alert";
class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            content_element_update:this.props.content_element_update,
            username:"",
            notifications:0,
            alert:<div/>
        }
        Requests.username(
            this.onUsernameResponce.bind(this),
            this.onApiError.bind(this),
            this.onError.bind(this)
        )
        Requests.notifications(
            this.onNotificationsNumberResponce.bind(this),
            this.onApiError.bind(this),
            this.onError.bind(this)
        )
    }
    onUsernameResponce(username){
        this.setState({
            username:username
        })
    }
    onNotificationsNumberResponce(notifications){
        this.setState({
            notifications:notifications
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
    }
    onError(err){
        this.setState({
            alert:alert("Operation Failed "+err,this.onAlertCloseCallback.bind(this))
        })
    }
    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="#">TMC|St Mary's Hospital</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item tmc_nav_item active">
                        <a className="nav-link" href="#" onClick={(e)=>this.state.content_element_update(<Home/>)}>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item tmc_nav_item">
                        <a className="nav-link" href="#" onClick={(e)=>this.state.content_element_update(<Profile/>)}>Profile</a>
                    </li>
                    <li className="nav-item tmc_nav_item">
                        <a className="nav-link" href="#" onClick={(e)=>this.state.content_element_update(<Notifications/>)} >Notifications <span className="badge badge-pill badge-primary">
                            {this.state.notifications}
                        </span>
                        </a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <img className="tmc_user_icon" src={user_img} />
                    <span className="tmc_user_name"> {this.state.username}</span>
                    {this.state.alert}
                </span>
            </div>
        </nav>

    }
}


export default NavBar;
