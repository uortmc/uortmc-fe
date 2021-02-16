

function GeneralInformation(props) {
    return <div>

        <div id="list-example" className="list-group col-12">
            <a className="list-group-item list-group-item-action" href="#list-item-1">
                <form className="form-inline tmc_form_fullspan">
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
                <form className="form-inline tmc_form_fullspan">
                    <div className="container">
                        <div className="row">
                            <span className="input-group-text col-2" id="basic-addon1">Identifier</span>
                            <input type="text" className="form-control col-10" disabled placeholder={props.token}
                                   aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </form>
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-1">
                <form className="form-inline tmc_form_fullspan">
                    <div className="container">
                        <div className="row">
                            <span className="input-group-text col-2" id="basic-addon1">Status</span>
                            <input type="text" className="form-control col-10" disabled placeholder={props.status}
                                   aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </form>
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-1">
                <form className="form-inline tmc_form_fullspan">
                    <div className="container">
                        <div className="row">
                            <span className="input-group-text col-2" id="basic-addon1">Created</span>
                            <input type="text" className="form-control col-10" disabled placeholder={props.created}
                                   aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </form>
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-1">
                <form className="form-inline tmc_form_fullspan">
                    <div className="container">
                        <div className="row">
                            <span className="input-group-text col-2" id="basic-addon1">Comments</span>
                            <textarea className="form-control col-10" value={props.comments}
                                      aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </form>
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-4">
                <button className="btn btn-primary float-left" >Save Changes</button>
            </a>

        </div>
    </div>
}
export default GeneralInformation;