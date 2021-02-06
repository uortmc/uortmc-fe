
import Enviroment from "../../settings";
var axios = require('axios');
var qs = require('qs');
class Requests{
    static username(callback) {
        var config = {
            method: 'get',
            url: Enviroment.BACKEND_URL+'/app/authenticated/profile',
            withCredentials:true
        };
        axios(config)
            .then(function (response) {
                console.log(response)
                callback(response.data.responce.first_name+" "+response.data.responce.last_name)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static notifications(onSuccessCallback,onApiErrorCallback,onErrorCallback) {
        var config = {
            method: 'get',
            url: Enviroment.BACKEND_URL+'/app/authenticated/getnotifications',
            withCredentials:true
        };
        axios(config)
            .then(function (response) {
                if(response.data.complete===true){
                    onSuccessCallback(response.data.responce.length)
                }else {
                    onApiErrorCallback(response.data)
                }
            })
            .catch(function (error) {
                onErrorCallback(error);
            });
    }
}
export default Requests