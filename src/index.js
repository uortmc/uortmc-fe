

import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./body/body";



function start(){
    var main=<Body index_update={start}/>
    ReactDom.render(
        main,
        document.getElementById('root')
    )
}
start()