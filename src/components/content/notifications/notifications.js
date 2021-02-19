
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import notifications from "./requests";
import alert from "../../utils/alert/alert";
import Content_header from "../../../etc/ContentHeader/content_header";
import user_img from "../../../resources/user.png";
import './notifications.css'
class Notifications extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            notifications:[],
            alert:<div/>
        }

        notifications(
            this.onResponce.bind(this),
            this.onApiErrorResponce.bind(this),
            this.onErrorResponce.bind(this)
        )
    }

    onResponce(responce) {
        this.setState({
            notifications:responce
        })
        console.log(responce)
    }
    onApiErrorResponce(responce){
        this.setState({
            alert:alert("Operation Failed"+responce.reason,this.onAlertCloseCallback.bind(this))
        })
        console.log("APIERR")
    }
    onErrorResponce(err){
        this.setState({
            alert:alert("Operation Failed"+err,this.onAlertCloseCallback.bind(this))
        })
        console.log("Err")
    }
    onAlertCloseCallback(){
        this.setState({
            alert:<div/>
        })
    }
    renderNotification(notification){

        return <div className="col-12 tmc_notifications-no-padding">
            <div className="card border-info mb-3" >
                <div className="card-body text-primary">
                    <h5 className="card-title">Notification</h5>
                    <p className="card-text">Message: {notification.message}</p>
                    <p className="card-text"><small className="text-muted">Created: {notification.created}</small></p>
                </div>
            </div>
        </div>
    }

    render() {
        return <div className="container-fluid">
            {this.state.alert}
            <div className="row">
                <Content_header img={user_img} message="Notifications"/>
            </div>
            <div className="row">
                    {this.state.notifications.map(this.renderNotification).reverse() }
            </div>
        </div>
    }
}


export default Notifications;
