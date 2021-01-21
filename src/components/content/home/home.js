
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import example_scan from "../../../resources/example_scan.jpg";
import style from './home.css'

class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">General Information</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Statistics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Results</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <div className="tmc_content_general_info_status_bar">
                    <span className="card-title text-left tmc_content_general_info_task_id">Task ID:2783742</span>
                    <span className="card-title text-right tmc_content_general_info_status">
                                    <button className="btn btn-success">Success</button>
                                </span>
                </div>
                <img src={example_scan}/>

            </div>
        </div>
    }
}


export default Home;
