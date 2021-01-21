
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompletedTasks from "../completed_tasks/completed_tasks";
import ScanHistory from "../scan_history/scan_history";
import Profile from "../profile/profile";
import style from './patients.css'

class Patients extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="containter-fluid">
            <div className="row">
                <nav className="col-12 navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Type a name or an ID" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                            </button>

                    </form>
                </nav>
            </div>
            <div className="row">
                <div className="col-12 tmc_patient_list">
                    <div id="list-example" className="list-group ">
                        <a className="list-group-item list-group-item-action" href="#list-item-1">A. Adams</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">S. Baker</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">N. Clark</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">M. Davis</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">K. Evans</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-1">A. Adams</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">S. Baker</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">N. Clark</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">M. Davis</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">K. Evans</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-1">A. Adams</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">S. Baker</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">N. Clark</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">M. Davis</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">K. Evans</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-1">A. Adams</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">S. Baker</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">N. Clark</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">M. Davis</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">K. Evans</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-1">A. Adams</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">S. Baker</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">N. Clark</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">M. Davis</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">K. Evans</a>
                    </div>
                </div>
            </div>
        </div>
    }
}


export default Patients;
