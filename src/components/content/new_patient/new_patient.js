
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_img from '../../../resources/user.svg'
import style from './new_patient.css'
import new_patient from "./requests";
import alert from "../../utils/alert/alert";
import Toast from 'react-bootstrap/Toast';
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
        return <div className="container-fluid">
            {this.state.alert}
            <div className="row">
                <div className="card col-12" >
                    <div className="row">
                        <div className="col-4">
                            <img src={user_img} alt="ABC" className="tmc_user_img_profile"/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h2 className="card-title">
                                    Patient submission form
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="list-example" className="list-group col-12">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Type</span>
                                </div>
                                <input type="text" className="form-control" disabled placeholder="Patient"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-3">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">First name</span>
                                </div>
                                <input type="text" className="form-control"
                                       aria-label="Username" aria-describedby="basic-addon1" onChange={this.onFirstNameChange.bind(this)}/>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-3">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Last name</span>
                                </div>
                                <input type="text" className="form-control"
                                       aria-label="Username" aria-describedby="basic-addon1" onChange={this.onLastNameChange.bind(this)}/>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-2">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Enrolled Date</span>
                                </div>
                                <input type="text" className="form-control" disabled placeholder={new Date().toDateString()}
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-3">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Nino</span>
                                </div>
                                <input type="text" className="form-control" placeholder="AA123456C"
                                       aria-label="Username" aria-describedby="basic-addon1" onChange={this.onNinoChange.bind(this)}/>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Comments</span>
                                </div>
                                <textarea  className="form-control" placeholder="Up to 200 characters"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
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
