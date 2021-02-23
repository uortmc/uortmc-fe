
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import alert from "../../utils/alert/alert";
import scan_img from "../../../resources/scan.png";
import GeneralInformation from "./general_information/general_information";
import Results from "./results/results";
import './scan_view.css'
import Content_header from "../../../etc/ContentHeader/content_header";
import scan_view_img from "../../../resources/icons/patient_or_scan_details.png";
class ScanView extends React.Component {
    constructor(props) {
        super(props);
        this.generalInfoComponent=
            <GeneralInformation
                token={props.token}
                status={props.status}
                created={props.created}
                comments={props.comments}/>
        this.resultsComponent=
            <Results
                token={props.token}
                comments={props.comments}/>
        this.state={
            content_area:this.generalInfoComponent,
            generalInfoActive:true,
            resultsActive:false,
            alert:<div/>
        }
    }

    onCommentChange(e){
        console.log("Hello")
        this.setState({
            comments:e.target.value
        })
    }
    onSuccess(responce){
        this.setState({
            alert:alert("Operation Completed",this.onCloseCallback.bind(this))
        })
        console.log(responce)
    }
    onAPIFailure(responce){
        this.setState({
            alert:alert("Operation Failed: "+responce.reason,this.onCloseCallback.bind(this))
        })
        console.log(responce)
    }
    onGenericFailure(msg){
        this.setState({
            alert:alert("Operation Failed: "+msg,this.onCloseCallback.bind(this))
        })
        console.log(msg)
    }
    onCloseCallback(e){
        this.setState({
            alert:<div/>
        })
    }
    onGeneralInformationClick(e){
        this.clearActiveState()
        this.setState({generalInfoActive:true})
        this.setState({
            content_area:this.generalInfoComponent
        })
    }
    onResultsClick(e){
        this.clearActiveState()
        this.setState({resultsActive:true})
        this.setState({
            content_area:this.resultsComponent
        })
    }
    renderNavLink(txt,isActive,onClickCallback){
        if(isActive){
            return <a className="nav-link active" href="#" onClick={onClickCallback}>{txt}</a>
        }
        return <a className="nav-link" href="#" onClick={onClickCallback}>{txt}</a>
    }
    clearActiveState(){
        this.setState({
            generalInfoActive:false,
            resultsActive:false
        })
    }
    render() {
        return <div className="container-fluid tmc_sv_container_fluid">
            {this.state.alert}
            <div className="row">
                <Content_header img={scan_view_img} message="Scan details"/>
            </div>
            <div className="row">
                <div className="card text-center col-12">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                {this.renderNavLink(
                                    "General information",
                                    this.state.generalInfoActive,
                                    this.onGeneralInformationClick.bind(this))}
                            </li>
                            <li className="nav-item">
                                {this.renderNavLink(
                                    "Results",
                                    this.state.resultsActive,
                                    this.onResultsClick.bind(this))}
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        {this.state.content_area}
                    </div>
                </div>
            </div>
        </div>
    }
}


export default ScanView;
