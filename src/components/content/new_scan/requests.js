
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
    static imageToBase64String(image){
        let getBase64 = file => {
            return new Promise(resolve => {
                let fileInfo;
                let baseURL = "";
                // Make new FileReader
                let reader = new FileReader();

                // Convert the file to base64 text
                reader.readAsDataURL(file);

                // on reader load somthing...
                reader.onload = () => {
                    // Make a fileInfo Object
                    console.log("Called", reader);
                    baseURL = reader.result;
                    console.log(baseURL);
                    resolve(baseURL);
                };
                console.log(fileInfo);
            });
        };
        return getBase64(image)
            .then(imageStrWithHeader=>imageStrWithHeader.replace("data:image/jpeg;base64,","")) //remove header JPEG
    }
    static new_scan_taskbe(
        callback_success,
        callback_api_err,
        callback_err,
        token,
        image){

        NewScanRequests.imageToBase64String(image)
            .then(
            imageStr=>{
                var form = qs.stringify({
                    'token': token,
                    'image': imageStr
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

            }
        ).catch(function (error) {
            callback_err(error)
        })

    }
}
export default NewScanRequests;