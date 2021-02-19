
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './patients.css'
import Handsontable from "handsontable";
import { HotTable, HotColumn } from "@handsontable/react";
import "handsontable/dist/handsontable.min.css";
import PatientsRequests from "./requests";
import alert from "../../utils/alert/alert";
import PatientView from "../patient_view/patient_view";
import Content_header from "../../../etc/ContentHeader/content_header";
import scan_img from "../../../resources/scan.png";

class Patients extends React.Component {
    constructor(props) {
        super(props);
        this.setContent=props.setContent
        this.state = {
            alert:<div/>,
            search:"",
            hotData: [
            ],
            data:[
            ],
            table_conf:{
                width: '100%',
                stretchH:"all",
                autoColumnSize: true,
                hiddenColumns: {
                    columns: [4],
                    indicators: false
                }
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
                readOnly: false,
                type:'text',
                validator:this.commentValidator,
                onSuccessCallback:undefined,
                onApiErrorResponce:this.onApiErrorResponce.bind(this),
                onErrorResponce:this.onErrorResponce.bind(this)

            },
            action_collumn_settings:{
                title:"Action",
                readOnly:true,
                setContent:this.setContent
            }

        };

        PatientsRequests.patients(
            this.onPatientsResponce.bind(this),
            this.onApiErrorResponce.bind(this),
            this.onErrorResponce.bind(this)
        )

    }
    scanRenderer(instance, td, row, col, prop, value, cellProperties) {
        function buttonOnClick(first_name,last_name,enrolled_date,nino,comments){
            cellProperties.setContent(
                <PatientView
                    first_name={first_name}
                    last_name={last_name}
                    enrolled_date={enrolled_date}
                    nino={nino}
                    comments={comments}
                    setContent={cellProperties.setContent}/>)
        }
        if(col!==5) return Handsontable.renderers.TextRenderer.apply(this,arguments)
        if(td.children.length<1){
            let button = document.createElement("BUTTON")
            button.innerText="Details"
            button.classList.add("btn")
            button.classList.add("btn-outline-primary")
            button.addEventListener("click", (e)=>{
                e.preventDefault();
                buttonOnClick(
                    instance.getDataAtCell(row,0),
                    instance.getDataAtCell(row,1),
                    instance.getDataAtCell(row,3),
                    instance.getDataAtCell(row,2),
                    instance.getDataAtCell(row,4))
            });
            td.appendChild(button)
        }
        return td
    }
    commentValidator(comment,callback){

        let ninocol=2
        let nino=this.instance.getData()[this.row][ninocol]
        PatientsRequests.setComment(()=>{},this.onApiErrorResponce,this.onErrorResponce,nino,comment)
        callback(true)

    }
    onPatientsResponce(responce){
        let data=responce.map(this.toHotTableCollumn)
        this.setState({
            data:data,
            hotData:data
        })
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
    toHotTableCollumn(patient){
        return [patient.first_name,patient.last_name,patient.nino,patient.enrolled_date,patient.comments,""]
    }
    onSearchChange(e){
        this.setState({
            search:e.target.value
        })
    }
    onSearch(e){
        e.preventDefault();
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
                    <HotColumn settings={this.state.enrolled_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.comments_collumn_settings} className="tmc_hot_collumn"/>
                    <HotColumn settings={this.state.action_collumn_settings} className="tmc_hot_collumn"/>
                </HotTable>
        );
    }
    render() {
        return <div className="container-fluid tmc_patients_container_fluid">
            {this.state.alert}
            <div className="row">
                <Content_header img={scan_img} message="My Patients"/>
            </div>
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
                <div className="col-12 tmc_patients_hot_table_area">
                    {this.renderTable()}
                </div>
            </div>
        </div>
    }
}


export default Patients;
