
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import alert from "../../utils/alert/alert";
import new_scam_img from '../../../resources/icons/new_scan.png'
import NinoVerifier from "../../../etc/utils";
import NewScanRequests from "./requests";
import './new_scan.css'
import Content_header from "../../../etc/ContentHeader/content_header";
class NewScan extends React.Component{
    constructor(props) {
        super(props);
        this.ninoregex=new NinoVerifier()
        this.state={
            image:null,
            nino:"",
            algorithm:"SVC",
            alert:<div/>
        }
    }
    onNinoChange(e){
        this.setState({
            nino:e.target.value
        })
    }
    onSelectedAlgorithmChange(e){
        this.setState({
            algorithm:e.target.value
        })
        console.log(e.target.value)
    }
    onImageChange(e){
        this.setState({
            image:e.target.files[0]
        })
        console.log(e.target.files[0])
    }
    onSubmit(e){
        if(!this.verifyForm()){
            this.onGenericFailure("Please insert valid values on the respective inputs")
        }else {
            NewScanRequests.new_scan_infobe(
                this.onSuccessGetToken.bind(this),
                this.onAPIFailure.bind(this),
                this.onGenericFailure.bind(this),
                this.state.nino)
        }
    }
    verifyForm(){
        return this.ninoregex.verify(this.state.nino) &&    //Nino is valid
            this.state.image!=null                          //Image has been submitted
    }
    onSuccessGetToken(responce){
        NewScanRequests.new_scan_taskbe(
            this.onSuccess.bind(this),
            this.onAPIFailure.bind(this),
            this.onGenericFailure.bind(this),
            responce.responce.token,
            this.state.image,
            this.state.algorithm)
    }
    onSuccess(responce){
        this.setState({
            alert:alert("Operation Completed",this.onCloseCallback.bind(this))
        })

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

    render() {
        return <div className="container-fluid tmc_ns_container_fluid">
            {this.state.alert}
            <div className="row">
                    <Content_header img={new_scam_img} message="Scan submission form"/>
            </div>
            <div className="row">
                <div id="list-example" className="list-group tmc_scan_list_group col-12">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_ns_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Type</span>
                                    <input type="text" className="form-control col-10" disabled placeholder="Scan"
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_ns_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Created date</span>
                                    <input type="text" className="form-control col-10" disabled placeholder={new Date().toDateString()}
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_ns_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Patient's nino</span>
                                    <input type="text" className="form-control col-10" placeholder="AA123456C"
                                           onChange={this.onNinoChange.bind(this)} aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_ns_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Algorithm</span>
                                        <select className="form-control col-10 " id="exampleFormControlSelect1" onChange={(e)=>{e.preventDefault();this.onSelectedAlgorithmChange(e)}}>
                                            <option value="SVC">(SVC) Simple C-Support Vector Machine v1</option>
                                            <option value="RAS">(RAS) Residual neural network V18</option>
                                        </select>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_ns_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Scan image</span>
                                    <input className="form-control col-10" type="file" id="formFileDisabled" onChange={
                                        (e)=>this.onImageChange(e)
                                    }/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">
                        <button className="btn btn-outline-primary" onClick={this.onSubmit.bind(this)}>Submit new scan</button>
                    </a>
                </div>
            </div>
        </div>
    }
}


export default NewScan;
