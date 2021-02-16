import example_scan from "../../../../resources/example_scan.jpg";
import React from "react";



function example(txt){
    return <div>
        <div className="tmc_content_general_info_status_bar">
            <span className="card-title text-left tmc_content_general_info_task_id">Task ID:2783742 {txt}</span>
            <span className="card-title text-right tmc_content_general_info_status">
                                    <button className="btn btn-success">Success</button>
                                </span>
        </div>
        <img src={example_scan}/>
    </div>
}
export default example;