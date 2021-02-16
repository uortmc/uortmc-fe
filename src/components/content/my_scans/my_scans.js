
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompletedTasks from "../completed_scans/completed_scans";
import Profile from "../profile/profile";
import style from './my_scans.css'

import Handsontable from "handsontable";
import { HotTable, HotColumn } from "@handsontable/react";
import "handsontable/dist/handsontable.min.css";

import alert from "../../utils/alert/alert";
import ScansRequests from "./request";
import PatientView from "../patient_view/patient_view";

class MyScans extends React.Component {
    constructor(props) {
        super(props);
        this.setContent=props.setContent
        this.state = {

            alert:<div/>,
            search:this.props.search,
            hotData: [
            ],
            data:[
            ],
            table_conf:{
                width: '100%',
                stretchH:"all"

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
            created_collumn_settings: {
                title: "Created Date",
                readOnly: true
            },
            status_collumn_settings:{
                title:"Status",
                readOnly:true
            },
            id_collumn_settings:{
                title:"Identifier",
                readOnly:true
            },
            action_collumn_settings: {
                title: "Action",
                readOnly: true,
                setContent:this.setContent
            }

        };
        this.initializeSearch()
    }
    initializeSearch(){
        if(this.state.search!==""){
            this.alterSearchState()
        }
    }
    componentDidMount() {
        ScansRequests.scans(
            this.onScansResponce.bind(this),
            this.onApiErrorResponce.bind(this),
            this.onErrorResponce.bind(this)
        )
    }
    scanRenderer(instance, td, row, col, prop, value, cellProperties) {
        function buttonOnClick(scan){
            //cellProperties.setContent(<PatientView/>)
        }
        if(col!==6) return Handsontable.renderers.TextRenderer.apply(this,arguments)
        if(td.children.length<1){
            let button = document.createElement("BUTTON")
            button.innerText="Details"
            button.classList.add("btn")
            button.classList.add("btn-outline-primary")
            button.addEventListener("click", (e)=>{e.preventDefault();buttonOnClick(value)});
            td.appendChild(button)
        }
        return td
    }
    toHotTableCollumn(scan){
        return [
            scan.ascPatient.first_name,
            scan.ascPatient.last_name,
            scan.ascPatient.nino,scan.created,
            scan.status,
            scan.token.toString().split("-")[0]+"...",""]
    }
    onScansResponce(responce){
        let data=responce.map(this.toHotTableCollumn.bind(this))
        this.setState({
            data:data,
            hotData:data
        })
        this.initializeSearch()
    }
    onAlertCloseCallback(){
        this.setState({
            alert:<div/>
        })
    }
    onApiErrorResponce(responce){
        this.setState({
            alert:alert("Operation Failed "+responce.reason,this.onAlertCloseCallback.bind(this))
        })
        console.log("APIERR")
    }
    onErrorResponce(err){
        this.setState({
            alert:alert("Operation Failed "+err,this.onAlertCloseCallback.bind(this))
        })
        console.log("Err")
    }

    onSearchChange(e){
        this.setState({
            search:e.target.value
        })
    }
    onSearch(e){
        e.preventDefault();
        this.alterSearchState()
    }
    alterSearchState(){
        let data = this.state.data.filter(e=>e[2].startsWith(this.state.search))
        this.setState({
            hotData:data
        })
    }
    renderTable() {
        return (
            <HotTable
                data={this.state.hotData}
                licenseKey="non-commercial-and-evaluation"
                settings={this.state.table_conf}
                renderer={this.scanRenderer}>

                <HotColumn settings={this.state.firstname_collumn_settings} className="tmc_hot_collumn"/>
                <HotColumn settings={this.state.lastname_collumn_settings} className="tmc_hot_collumn"/>
                <HotColumn settings={this.state.nino_collumn_settings} className="tmc_hot_collumn"/>
                <HotColumn settings={this.state.created_collumn_settings} className="tmc_hot_collumn"/>
                <HotColumn settings={this.state.status_collumn_settings} className="tmc_hot_collumn"/>
                <HotColumn settings={this.state.id_collumn_settings} className="tmc_hot_collumn"/>
                <HotColumn settings={this.state.action_collumn_settings} className="tmc_hot_collumn"/>
            </HotTable>
        );
    }
    render() {
        return <div className="containter">
            {this.state.alert}
            <div className="row">
                <nav className="col-12 navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by NINO" value={this.state.search} onChange={this.onSearchChange.bind(this)} aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.onSearch.bind(this)} type="submit">Search
                        </button>

                    </form>
                </nav>
            </div>
            <div className="row">
                <div className="col-12 tmc_hot_table_area">
                    {this.renderTable()}
                </div>
            </div>
        </div>
    }
}


export default MyScans;
