import Enviroment from "../../../settings";

var axios = require('axios');
var qs = require('qs');
function login(onSuccessCallback,onApiErrorCallback,onErrorCallback,username,password){
    var data = qs.stringify({
        'username': username,
        'password': password
    });
    var config = {
        method: 'post',
        url: Enviroment.INFO_BACKEND_URL+'/app/auth/login/',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data,
        withCredentials:true
    };
    axios(config)
        .then(function (response) {
            if(response.data.complete===true){
                onSuccessCallback(response.data)
            }else {
                onApiErrorCallback(response.data)
            }
        })
        .catch(function (error) {
            onErrorCallback(error);
        });
}
export default login