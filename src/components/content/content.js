
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Patients from "./patients/patients";
import NewPatient from "./new_patient/new_patient";
import NewScan from "./new_scan/new_scan";
import MyScans from "./my_scans/my_scans";
import './content.css'
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
        return <div className="container-fluid tmc_content_container_fullspan">
            <div className="row">
                <div className="col-2">
                    <div id="list-example" className="tmc_content_list_group tmc_generic_rounded_element">
                        <a className="list-group-item list-group-item-action" onClick={()=>this.setContent(<NewScan setContent={this.setContent.bind(this)}/>)} href="#list-item-2">New Scan</a>
                        <a className="list-group-item list-group-item-action" onClick={()=>this.setContent(<MyScans search="" setContent={this.setContent.bind(this)}/>)} href="#list-item-3">My Scans</a>
                        <a className="list-group-item list-group-item-action" onClick={()=>this.setContent(<NewPatient setContent={this.setContent.bind(this)}/>)} href="#list-item-4">New Patient</a>
                        <a className="list-group-item list-group-item-action" onClick={()=>this.setContent(<Patients setContent={this.setContent.bind(this)}/>)} href="#list-item-4">My Patients</a>
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
