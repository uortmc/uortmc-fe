
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './content.css'
import example_scan from '../../resources/example_scan.jpg'
import Home from "./home/home";
import Profile from "./profile/profile";
import Body from "../../body/body";
import CompletedTasks from "./completed_scans/completed_scans";
import MyScans from "./my_scans/my_scans";
import Patients from "./patients/patients";
import NewPatient from "./new_patient/new_patient";
class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            content_area:this.props.content_area

        }
    }
    setContent(elem){
        this.setState({
            content_area:elem
        })
    }
    render() {
        return <div className="container-fluid tmc_content">
            <div className="row">
                <div className="col-2 tmc_nav_v">
                    <div id="list-example" className="list-group">
                        <a className="list-group-item list-group-item-action" onClick={()=>this.setContent(<CompletedTasks/>)} href="#list-item-1">Completed Scans</a>
                        <a className="list-group-item list-group-item-action" onClick={()=>this.setContent(<MyScans/>)} href="#list-item-2">New Scan</a>
                        <a className="list-group-item list-group-item-action" onClick={()=>this.setContent(<MyScans/>)} href="#list-item-3">My Scans</a>
                        <a className="list-group-item list-group-item-action" onClick={()=>this.setContent(<NewPatient/>)} href="#list-item-4">New Patient</a>
                        <a className="list-group-item list-group-item-action" onClick={()=>this.setContent(<Patients/>)} href="#list-item-4">My Patients</a>
                    </div>
                </div>
                <div className="col-10 ">
                    {this.state.content_area}
                </div>

            </div>
        </div>
    }
}


export default Content;
