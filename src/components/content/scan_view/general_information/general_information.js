import React from "react";
import alert from "../../../utils/alert/alert";
import './general_information.css'

class GeneralInformation extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <div id="list-example" className="list-group tmc_gi_list_group col-12">
                <a className="list-group-item list-group-item-action" href="#list-item-1">
                    <form className="form-inline tmc_gi_form_fullspan">
                        <div className="container">
                            <div className="row">
                                <span className="input-group-text col-2" id="basic-addon1">Type</span>
                                <input type="text" className="form-control col-10" disabled placeholder="Scan"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </form>
                </a>
                <a className="list-group-item list-group-item-action" href="#list-item-1">
                    <form className="form-inline tmc_gi_form_fullspan">
                        <div className="container">
                            <div className="row">
                                <span className="input-group-text col-2" id="basic-addon1">Identifier</span>
                                <input type="text" className="form-control col-10" disabled placeholder={this.props.token}
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </form>
                </a>
                <a className="list-group-item list-group-item-action" href="#list-item-1">
                    <form className="form-inline tmc_gi_form_fullspan">
                        <div className="container">
                            <div className="row">
                                <span className="input-group-text col-2" id="basic-addon1">Status</span>
                                <input type="text" className="form-control col-10" disabled placeholder={this.props.status}
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </form>
                </a>
                <a className="list-group-item list-group-item-action" href="#list-item-1">
                    <form className="form-inline tmc_gi_form_fullspan">
                        <div className="container">
                            <div className="row">
                                <span className="input-group-text col-2" id="basic-addon1">Created</span>
                                <input type="text" className="form-control col-10" disabled placeholder={this.props.created}
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </form>
                </a>

            </div>
        </div>
    }
}
export default GeneralInformation;