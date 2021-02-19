import React from "react";
import alert from "../../../utils/alert/alert";
import setComment from "./requests";
import './general_information.css'

class GeneralInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comments:props.comments,
            alert:<div/>
        }
    }
    onCommentChange(e){
        this.setState({
            comments:e.target.value
        })
    }
    onSaveChanges(e){
        e.preventDefault()
        setComment(
            this.onSuccess.bind(this),
            this.onAPIFailure.bind(this),
            this.onGenericFailure.bind(this),
            this.props.token,
            this.state.comments
        )
    }

    onSuccess(responce){

        this.setState({
            alert:alert("Operation Completed",this.onCloseCallback.bind(this))
        })
        console.log(responce)
    }
    onAPIFailure(responce){
        this.setState({
            alert:alert("Operation Failed: "+responce.reason,this.onCloseCallback.bind(this))
        })
        console.log(responce)
    }
    onGenericFailure(msg){
        this.setState({
            alert:alert("Operation Failed: "+msg,this.onCloseCallback.bind(this))
        })
        console.log(msg)
    }
    onCloseCallback(e){
        this.setState({
            alert:<div/>
        })
    }
    render(){
        return <div>
            {this.state.alert}
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
                <a className="list-group-item list-group-item-action" href="#list-item-1">
                    <form className="form-inline tmc_gi_form_fullspan">
                        <div className="container">
                            <div className="row">
                                <span className="input-group-text col-2" id="basic-addon1">Comments</span>
                                <textarea className="form-control col-10" value={this.state.comments}
                                          aria-label="Username" aria-describedby="basic-addon1"
                                          onChange={this.onCommentChange.bind(this)} />
                            </div>
                        </div>
                    </form>
                </a>
                <a className="list-group-item list-group-item-action" href="#list-item-4">
                    <button className="btn btn-primary float-left" onClick={this.onSaveChanges.bind(this)} >Save Changes</button>
                </a>

            </div>
        </div>
    }
}
export default GeneralInformation;