
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/nav/nav";
import Content from "../components/content/content";
import Footer from "../components/footer";
import Home from "../components/content/home/home";
import Profile from "../components/content/profile/profile";
import Login from "../components/content/login/login";
import Enviroment from "../settings";


class CurrentState{
    static Unauthorized=0
    static Authorized=1
}
class Body extends React.Component{
    constructor(props) {
        super(props);
        this.content_ref=React.createRef();
        this.content=<Content ref={this.content_ref} content_area={<Home/>}/>;
        this.state={
            currentState:CurrentState.Unauthorized,
            navbar:<NavBar content_element_update={this.content_element_update.bind(this)}/>,
            body:this.content,
            footer:<Footer/>,
            index_update:props.index_update
        }

    }
    componentDidMount() {
        document.title=Enviroment.APP_NAME
    }

    content_element_update(elem){
        this.content_ref.current.setContent(elem)
        this.props.index_update()
    }
    triggerAuthorized(){
        this.setState({
            currentState:CurrentState.Authorized
        })
    }
    render() {
        if(this.state.currentState===CurrentState.Unauthorized) return this.renderUnauthorized()
        else return this.renderAuthorized()
    }
    renderAuthorized(){
        return <div className="container">
            <div className="row"><div className="col-12">{this.state.navbar}</div></div>
            <div className="row"><div className="col-12">{this.state.body}</div></div>
            <div className="row"><div className="col-12">{this.state.footer}</div></div>
        </div>
    }
    renderUnauthorized(){
        return <Login triggerAuthorized={this.triggerAuthorized.bind(this)}/>
    }
}

export default Body