
function Hint(props){
    return <div>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{props.header}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.subheader}</h6>
                <p className="card-text">{props.message}</p>
            </div>
        </div>
    </div>
}
export default Hint;