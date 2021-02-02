
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompletedTasks from "../completed_tasks/completed_tasks";
import ScanHistory from "../scan_history/scan_history";
import Profile from "../profile/profile";
import style from './patients.css'

import Handsontable from "handsontable";
import { HotTable, HotColumn } from "@handsontable/react";
import "handsontable/dist/handsontable.min.css";
import patients from "./requests";

class Patients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hotData: [
                ["","","","",""]
            ],
            table_conf:{
                width: '100%'

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
                readOnly: true

            }
        };

        patients(this.onPatientsResponce.bind(this))

    }
    toHotTableCollumn(patient){
        return [patient.first_name,patient.last_name,patient.nino,patient.enrolled_date,patient.comments]
    }
    onPatientsResponce(responce){
        this.setState({
            hotData:responce.map(this.toHotTableCollumn)
        })
    }
    rendertable() {
        return (
                <HotTable
                    data={this.state.hotData}
                    licenseKey="non-commercial-and-evaluation"
                    settings={this.state.table_conf}
                >
                    <HotColumn settings={this.state.firstname_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.lastname_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.nino_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.enrolled_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.comments_collumn_settings} className="tmc_hot_collumn"/>
                </HotTable>
        );
    }

    render() {
        return <div className="containter-fluid">
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
                {this.rendertable()}
            </div>
        </div>
    }
}


export default Patients;
