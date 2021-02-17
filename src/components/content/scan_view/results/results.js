import example_scan from "../../../../resources/example_scan.jpg";
import React from "react";
import './results.css'
import alert from "../../../utils/alert/alert";
import getResults from "./requests";


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            results:"",
            alert:<div/>
        }
    }
    componentDidMount() {
        getResults(
            this.onSuccess.bind(this),
            this.onAPIFailure.bind(this),
            this.onGenericFailure.bind(this),
            this.props.token
        )
    }

    onSuccess(responce){
        this.setState({
            results:responce.responce.results
        })
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
            <div>
                <div className="tmc_content_general_info_status_bar">
                    <span className="card-title text-left tmc_content_general_info_task_id">Classification</span>
                    <span className="card-title text-right tmc_content_general_info_status">
                <button className="btn btn-success">{this.state.results}</button>
            </span>
                </div>
                <img className="tmc_scan_image" src={example_scan}/>
            </div>
        </div>

    }
}
export default Results;