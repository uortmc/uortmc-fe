
import Enviroment from "../../../settings";
var axios = require('axios');
var qs = require('qs');
class ScansRequests{
    static scans(onSuccessCallback,onApiErrorCallback,onErrorCallback) {
        var config = {
            method: 'get',
            url: Enviroment.INFO_BACKEND_URL+'/app/authenticated/getscans',
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
    static setComment(onSuccessCallback,onApiErrorCallback,onErrorCallback,id,comment){
        var form = qs.stringify({
            'id': id,
            'comment':comment
        });
        var config = {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: Enviroment.INFO_BACKEND_URL+'/app/authenticated/scansetcomment',
            withCredentials:true,
            data:form
        };
        axios(config)
            .then(function (response) {
                if(response.data.complete===true){
                    onSuccessCallback(response.data)
                    console.log("OK")
                }else {
                    onApiErrorCallback(response.data)
                    console.log("APIERR")
                }
            })
            .catch(function (error) {
                onErrorCallback(error)
                console.log("ERR")
            });
    }

}
export default ScansRequests;