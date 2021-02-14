

import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./body/body";
import Enviroment from "./settings";

function start(){
    console.log("Pointing to "+Enviroment.INFO_BACKEND_URL)
    var main=<Body index_update={start}/>
    ReactDom.render(
        main,
        document.getElementById('root')
    )
}
start()