
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import example_scan from "../../../resources/example_scan.jpg";
import style from './login.css'

import RequestSettings from "../../../settings";
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
            triggerAuthorized:props.triggerAuthorized
        }
    }
    submit(e){
        console.log(RequestSettings.BACKEND_URL)
        let self=this
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'username': this.state.username,
            'password': this.state.password
        });
        var config = {
            method: 'post',
            url: RequestSettings.BACKEND_URL+'/app/auth/login/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data,
            withCredentials:true
        };
        axios(config)
            .then(function (response) {
                self.onResponce(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    onResponce(responce){
        if(responce.data.complete){
            this.setState({
                loginStatus:LoginStatus.Success
            })
            this.state.triggerAuthorized()
        }
        else{
            this.setState({
                loginStatus:LoginStatus.Fail
            })
        }
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
        let login_warning=<small id="emailHelp" className="form-text text-muted"/>
        if(this.state.loginStatus===LoginStatus.Fail){
            login_warning=<small id="emailHelp" className="form-text text-muted">Username or password wrong</small>
        }
        else if(this.state.loginStatus===LoginStatus.Success){
            login_warning=<small id="emailHelp" className="form-text text-muted">Success</small>
        }
        return <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <a className="navbar-brand" href="#">TMC|St Mary's Hospital</a>
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
                                {login_warning}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.onPasswordChange.bind(this)} id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary"  onClick={(e)=>{this.submit(e);e.preventDefault()}}>Log in</button>
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
