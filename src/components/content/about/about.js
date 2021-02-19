
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'
class About extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="tmc_generic_rounded_element card text-center ">
            <div className="card-header">
                UORTMC About page
            </div>
            <div className="card-body">
                <h5 className="card-title">Thyroid Module Classifier(TMC)</h5>
                <p className="card-text">2020-2021 Bsc thesis project</p>
                <p className="card-text">Bsc Candidate: Stefanos Stefanou</p>
                <p className="card-text">Supervisor: Huizhi Liang</p>
            </div>
            <div className="card-footer text-muted">
                Version 1.0.0
            </div>
        </div>
    }
}


export default About;
