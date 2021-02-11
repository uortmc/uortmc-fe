
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_img from '../../../resources/user.png'
import style from './about.css'
import alert from "../../utils/alert/alert";
class About extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="card text-center">
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
