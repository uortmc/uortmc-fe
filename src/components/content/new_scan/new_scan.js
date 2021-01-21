
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import user_img from '../../../resources/user.svg'
import style from './new_scan.css'
class NewScan extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="card col-12" >
                    <div className="row">
                        <div className="col-4">
                            <img src={user_img} alt="ABC" className="tmc_user_img_profile"/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <form className="form-inline">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Patient's Name</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Type the name"
                                                   aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                    </form>
                                    <form className="form-inline">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Patient's Surname</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Type Surname"
                                                   aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                    </form>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="list-example" className="list-group col-12">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Type</span>
                                </div>
                                <input type="text" className="form-control" disabled placeholder="Patient"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-2">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Enrolled Date</span>
                                </div>
                                <input type="text" className="form-control" disabled placeholder={new Date().toDateString()}
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-3">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">TIRADS</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Accepted values:1-5"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Comments</span>
                                </div>
                                <textarea  className="form-control" placeholder="Up to 200 characters"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">
                        <button className="btn btn-primary ">Upload scan image</button>
                        <button className="btn btn-primary ml-1">Create prediction task</button>
                    </a>
                </div>
            </div>
        </div>
    }
}


export default NewScan;
