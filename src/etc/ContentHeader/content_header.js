
import React from "react";

function Content_header(props){
    return <div className="card col-12" >
        <div className="row">
            <div className="col-4">
                <img src={props.img} alt="ABC" className="tmc_user_img_profile tmc_patient_form_icon"/>
            </div>
            <div className="col-8">
                <div className="card-body">
                    <h2 className="card-title">
                        {props.message}
                    </h2>
                </div>
            </div>
        </div>
    </div>
}
export default Content_header;