
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompletedTasks from "../completed_scans/completed_scans";
import MyScans from "../my_scans/my_scans";
import Profile from "../profile/profile";
import style from './patients.css'

import Handsontable from "handsontable";
import { HotTable, HotColumn } from "@handsontable/react";
import "handsontable/dist/handsontable.min.css";
import patients from "./requests";
import alert from "../../utils/alert/alert";

class Patients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alert:<div/>,
            hotData: [
                ["","","","",""]
            ],
            table_conf:{
                width: '100%',
                stretchV:"all",

            },
            firstname_collumn_settings: {
                title: "First Name",
                readOnly: true

            },
            lastname_collumn_settings: {
                title: "Last Name",
                readOnly: true
            },
            nino_collumn_settings: {
                title: "Nino",
                readOnly: true
            },
            enrolled_collumn_settings: {
                title: "Enrolled Date",
                readOnly: true
            },
            comments_collumn_settings: {
                title: "Comments",
                readOnly: false

            }

        };

        patients(
            this.onPatientsResponce.bind(this),
            this.onApiErrorResponce.bind(this),
            this.onErrorResponce.bind(this)
        )

    }
    onPatientsResponce(responce){
        this.setState({
            hotData:responce.map(this.toHotTableCollumn)
        })
        console.log("OK")
    }
    onAlertCloseCallback(){
        this.setState({
            alert:<div/>
        })
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
    toHotTableCollumn(patient){
        return [patient.first_name,patient.last_name,patient.nino,patient.enrolled_date,patient.comments]
    }

    renderTable() {
        return (
                <HotTable
                    data={this.state.hotData}
                    licenseKey="non-commercial-and-evaluation"
                    settings={this.state.table_conf}
                    className="tmc_hot_table">

                    <HotColumn settings={this.state.firstname_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.lastname_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.nino_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.enrolled_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.comments_collumn_settings} className="tmc_hot_collumn"/>
                </HotTable>
        );
    }

    render() {
        return <div className="containter">
            {this.state.alert}
            <div className="row">
                <nav className="col-12 navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Type a name or an ID" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                            </button>

                    </form>
                </nav>
            </div>
            <div className="row">
                <div className="col-12">
                    {this.renderTable()}
                </div>
            </div>
        </div>
    }
}


export default Patients;
