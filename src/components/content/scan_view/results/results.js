import example_scan from "../../../../resources/example_scan.jpg";
import React from "react";
import './results.css'


function Results(props){
    return <div>
        <div className="tmc_content_general_info_status_bar">
            <span className="card-title text-left tmc_content_general_info_task_id">Classification</span>
            <span className="card-title text-right tmc_content_general_info_status">
                <button className="btn btn-success">{props.result}</button>
            </span>
        </div>
        <img className="tmc_scan_image" src={example_scan}/>
    </div>
}
export default Results;