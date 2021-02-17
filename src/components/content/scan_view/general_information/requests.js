import Enviroment from "../../../../settings";


var axios = require('axios');
var qs = require('qs');
function setComment(onSuccessCallback,onApiErrorCallback,onErrorCallback,token,comment){
    var form = qs.stringify({
        'token': token,
        'comment':comment
    });
    var config = {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: Enviroment.INFO_BACKEND_URL+'/app/authenticated/updatescancomment',
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

export default setComment;