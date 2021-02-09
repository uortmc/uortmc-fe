
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import example_scan from "../../../resources/example_scan.jpg";
import style from './login.css'

import Enviroment from "../../../settings";
import login from "./requests";
import alert from "../../utils/alert/alert";
import logo from "../../../resources/logo.png";
/**
 * LoginStatus
 */
class LoginStatus{
    static NotSubmitted=0
    static Success=1
    static Fail=2

}
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            loginStatus:LoginStatus.NotSubmitted,
            username:"huizhi.liang",
            password:"12345678",
            triggerAuthorized:props.triggerAuthorized,
            alert:<div/>
        }
    }
    onSuccessLogin(responce){
        this.state.triggerAuthorized()

    }
    onFailedLogin(responce){
        this.setState({
            alert:alert("Login Failed: "+responce.reason,this.onCloseCallback.bind(this))
        })
        console.log("Faled")
    }
    onError(e){
        this.setState({
            alert:alert("Login Failed:"+e,this.onCloseCallback.bind(this))
        })
    }
    onCloseCallback(){
        this.setState({
            alert:<div/>
        })
    }
    onSubmit(e){
        login(
            this.onSuccessLogin.bind(this),
            this.onFailedLogin.bind(this),
            this.onError.bind(this),
            this.state.username,
            this.state.password)

    }

    onUsernameChange(e){
        this.setState({
            username:e.target.value,
        })
    }
    onPasswordChange(e){
        this.setState({
            password:e.target.value,
        })
    }
    render() {
        return <div>
            <div className="container">
                {this.state.alert}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img className="tmc_logo" src={logo}/>
                        UORTMC|Royal Berkshire Hospital</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    </div>
                </nav>
                <div className="row loginrow">
                    <div className="col-4"/>
                    <div className="col-4 form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" value={this.state.username} onChange={this.onUsernameChange.bind(this)} placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.onPasswordChange.bind(this)} id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary"  onClick={(e)=>{this.onSubmit(e);e.preventDefault()}}>Log in</button>
                        </form>
                    </div>
                    <div className="col-4"/>
                </div>
                <div className="row">
                    <div className="col-12" >

                    </div>
                </div>
            </div>
        </div>
    }
}


export default Login;
