
import Enviroment from "../../../settings";
var axios = require('axios');
var qs = require('qs');
function new_scan(
        callback_success,
        callback_api_err,
        callback_err,
        nino){
    var form = qs.stringify({
        'nino': nino
    });
    var config = {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: Enviroment.BACKEND_URL+'/app/authenticated/addscan',
        withCredentials:true,
        data:form
    };
    axios(config)
        .then(function (response) {
            if(response.data.complete===true){
                callback_success(response.data)
            }else {
                callback_api_err(response.data)
            }

        })
        .catch(function (error) {
            callback_err(error)
        });
}
export default new_scan;