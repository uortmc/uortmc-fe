
import Enviroment from "../../../settings";
var axios = require('axios');
var qs = require('qs');
function notifications(onSuccessCallback,onApiErrorCallback,onErrorCallback) {
    var config = {
        method: 'get',
        url: Enviroment.BACKEND_URL+'/app/authenticated/getnotifications',
        withCredentials:true
    };
    axios(config)
        .then(function (response) {
            if(response.data.complete===true){
                onSuccessCallback(response.data.responce)
            }else {
                onApiErrorCallback(response.data)
            }
        })
        .catch(function (error) {
            onErrorCallback(error);
        });
}
export default notifications;