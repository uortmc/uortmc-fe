
import Enviroment from "../../../settings";
var axios = require('axios');
var qs = require('qs');
class NewScanRequests{
    static new_scan_infobe(
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
            url: Enviroment.INFO_BACKEND_URL+'/app/authenticated/addscan',
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
    static new_scan_taskbe(
        callback_success,
        callback_api_err,
        callback_err,
        token){
        var form = qs.stringify({
            'token': token
        });
        var config = {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: Enviroment.TASK_BACKEND_URL+'/app/scan/addscan',
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
}
export default NewScanRequests;