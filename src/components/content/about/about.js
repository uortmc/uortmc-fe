
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'
import logo from '../../../resources/logo2.png'
class About extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="tmc_generic_rounded_element card text-center ">
            <div className="card-header">
                UORTMC About page
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={logo}  className="tmc_about_logo"/>
                </div>
                <div className="col-8 card-body ">
                    <div className="tmc_about_elements">
                        <h5 className="card-title">Thyroid Module Classifier(TMC)</h5>
                        <p className="card-text">2020-2021 Bsc thesis project</p>
                        <p className="card-text">Bsc Candidate: Stefanos Stefanou</p>
                        <p className="card-text">Supervisor: Huizhi Liang</p>
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">
                Version 1.0.0
            </div>
        </div>
    }
}


export default About;
