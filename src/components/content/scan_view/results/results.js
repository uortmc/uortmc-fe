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
                <div>
                    <span className="card-title text-left">Classification</span>
                    <span className="card-title text-right">
                <button className="btn btn-outline-primary">{this.state.results}</button>
            </span>
                </div>
                <img className="tmc_scan_image" src={example_scan}/>
            </div>
        </div>

    }
}
export default Results;