
import 'bootstrap/dist/css/bootstrap.min.css';
import './alert.css'
import Toast from "react-bootstrap/Toast";
import React from "react";

function alert(msg,onCloseCallback){
    return <div
        aria-live="polite"
        aria-atomic="true"
        style={{
            position: 'absolute',
            top:0,
            right:0,
            left:0,
            bottom:0,
            minHeight: '100px',
            zIndex:10,
            minWidth:'200px'
        }}
    >
        <Toast
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
            }}
            onClose={onCloseCallback}
        >
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">System</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>{msg}</Toast.Body>
        </Toast>
    </div>
}
export default alert
