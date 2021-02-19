
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_img from '../../../resources/user.png'
import new_patient from "./requests";
import alert from "../../utils/alert/alert";
import Content_header from "../../../etc/ContentHeader/content_header";
class NewPatient extends React.Component{
    constructor(props) {
        super(props);
        this.ninoregex=new RegExp('[A-Z]{2}[1-9]{6}[A-Z]')
        this.state={
            firstname:"",
            lastname:"",
            nino:"",
            alert:<div/>
        }
    }
    onFirstNameChange(e){
        this.setState({
            firstname:e.target.value
        })
    }
    onLastNameChange(e){
        this.setState({
            lastname:e.target.value
        })
    }
    onNinoChange(e){
        this.setState({
            nino:e.target.value
        })
    }
    onSubmit(e){
        if(!this.verifyForm()){
            this.onGenericFailure("Please insert valid values on the respective inputs")
        }else{
            new_patient(
                this.onSuccess.bind(this),
                this.onAPIFailure.bind(this),
                this.onGenericFailure.bind(this),
                this.state.firstname,
                this.state.lastname,
                this.state.nino)
        }
    }
    verifyForm(){
        return this.state.firstname.length>2 &&
            this.state.lastname.length>2 &&
            this.state.nino.length===9 &&
            this.ninoregex.test(this.state.nino)
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

    render() {
        return <div className="container-fluid tmc_container_fluid">
            {this.state.alert}
            <div className="row">
                <Content_header img={user_img} message="Patient Submission Form"/>
            </div>
            <div className="row">
                <div id="list-example" className="list-group col-12">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Type</span>
                                    <input type="text" className="form-control col-10" disabled placeholder="Patient"
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">First name</span>
                                    <input type="text" className="form-control col-10" placeholder=""
                                           aria-label="Username" aria-describedby="basic-addon1" onChange={this.onFirstNameChange.bind(this)}/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Last name</span>
                                    <input type="text" className="form-control col-10" placeholder=""
                                           aria-label="Username" aria-describedby="basic-addon1" onChange={this.onLastNameChange.bind(this)} />
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Nino</span>
                                    <input type="text" className="form-control col-10" placeholder="AA123456C"
                                           aria-label="Username" aria-describedby="basic-addon1" onChange={this.onNinoChange.bind(this)} />
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Enrolled Date</span>
                                    <input type="text" className="form-control col-10" disabled placeholder={new Date().toDateString()}
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">
                        <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Create New Patient</button>
                    </a>
                </div>
            </div>
        </div>
    }
}


export default NewPatient;
