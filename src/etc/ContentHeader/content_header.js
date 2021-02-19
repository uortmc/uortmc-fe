
import React from "react";
import './content_header.css'
function Content_header(props){
    return <div className="tmc_ch_rounded_element tmc_ch_margin_bottom_ed_element card col-12" >
        <div className="row">
            <div className="col-4">
                <img src={props.img} alt="ABC" className="tmc_ch_user_img_profile tmc_ch_patient_form_icon"/>
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