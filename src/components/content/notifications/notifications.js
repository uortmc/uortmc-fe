
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import notifications from "./requests";

class Notifications extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            notifications:[]
        }

        notifications(this.onResponce.bind(this))
    }

    onResponce(responce) {
        this.setState({
            notifications:responce.responce
        })
        console.log(responce.responce)
    }
    renderNotification(notification){

        return <div className="container-fluid">

            <div className="card border-info mb-3" >
                <div className="card-body text-info">
                    <h5 className="card-title">Notification</h5>
                    <p className="card-text">Message:{notification.message}</p>
                    <p className="card-text"><small className="text-muted">Created :{notification.created}</small></p>
                </div>
            </div>
        </div>
    }

    render() {
        return this.state.notifications.map(this.renderNotification)
    }
}


export default Notifications;
