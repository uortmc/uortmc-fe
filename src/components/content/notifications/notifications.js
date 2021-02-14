
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import notifications from "./requests";
import alert from "../../utils/alert/alert";

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

        return <div className="container-fluid">

            <div className="card border-info mb-3" >
                <div className="card-body text-info">
                    <h5 className="card-title">Notification</h5>
                    <p className="card-text">Message: {notification.message}</p>
                    <p className="card-text"><small className="text-muted">Created: {notification.created}</small></p>
                </div>
            </div>
        </div>
    }

    render() {
        return <div className="container">
            {this.state.alert}
            {this.state.notifications.map(this.renderNotification).reverse() }
        </div>
    }
}


export default Notifications;
