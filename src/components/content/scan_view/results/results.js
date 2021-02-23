import example_scan from "../../../../resources/example_scan.jpg";
import React from "react";
import './results.css'
import alert from "../../../utils/alert/alert";
import ResultsRequests from "./requests";


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            results:"",
            comments:props.comments,
            agree:this.doctorAgree(props.comments),
            alert:<div/>
        }
    }

    doctorAgree(comments){
        return comments==="Not Set"?false:true;
    }
    onCommentChange(e){
        this.setState({
            comments:e.target.value
        })
    }

    commentSection(){
        let disagre=<a className="list-group-item list-group-item-action" href="#list-item-1">
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
        if(!this.state.agree){
            return <div/>
        }
        else return disagre
    }

    onDoctorOpinionClick(e){
        let curr=this.state.agree
        this.setState({
            agree:!curr
        })
    }
    doctorsOpinion(){
        let generic=<a className="list-group-item list-group-item-action" href="#list-item-1">
            <form className="form-inline tmc_gi_form_fullspan">
                <div className="container">
                    <div className="row">
                        <span className="input-group-text col-2" id="basic-addon1">Agree?</span>
                        <div className="btn-group col-10" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-primary" onClick={this.onDoctorOpinionClick.bind(this)}>
                                {this.state.agree===true?"No":"Yes"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </a>
        return generic
    }
    componentDidMount() {
        ResultsRequests.getResults(
            this.onSuccessResult.bind(this),
            this.onAPIFailure.bind(this),
            this.onGenericFailure.bind(this),
            this.props.token
        )
    }

    onSuccessResult(responce){
        this.setState({
            results:responce.responce.results
        })
    }
    onSuccessComment(responce){

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

    onSaveChanges(e){
        e.preventDefault()
        ResultsRequests.setComment(
            this.onSuccessComment.bind(this),
            this.onAPIFailure.bind(this),
            this.onGenericFailure.bind(this),
            this.props.token,
            this.state.comments
        )
    }
    //                <button className="btn btn-outline-primary">{this.state.results}</button>
    render(){
        return <div className="container-fluid">
            {this.state.alert}

            <div className="row">
                <img className="tmc_scan_image" src={example_scan}/>
            </div>
            <div className="row">
                <div id="list-example" className="list-group tmc_gi_list_group col-12 tmc_results_results">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline tmc_gi_form_fullspan">
                            <div className="container">
                                <div className="row">
                                    <span className="input-group-text col-2" id="basic-addon1">Classification</span>
                                    <input type="text" className="form-control col-10" disabled placeholder="Malignant"
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </form>
                    </a>
                    {this.doctorsOpinion()}
                    {this.commentSection()}

                    <a className="list-group-item list-group-item-action" href="#list-item-4">
                        <button className="btn btn-outline-primary float-left" onClick={this.onSaveChanges.bind(this)} >Save Changes</button>
                    </a>
                </div>
            </div>



        </div>

    }
}
export default Results;