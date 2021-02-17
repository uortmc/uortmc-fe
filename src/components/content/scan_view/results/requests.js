import Enviroment from "../../../../settings";


var axios = require('axios');
var qs = require('qs');
function getResults(onSuccessCallback,onApiErrorCallback,onErrorCallback,token){
    var params = {
        'token': token
    };
    var config = {
        method: 'get',
        url: Enviroment.TASK_BACKEND_URL+'/app/scan/getscan',
        params:params
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

export default getResults;