
import Enviroment from "../../../settings";
var axios = require('axios');
var qs = require('qs');
function patients(callback) {
    var config = {
        method: 'get',
        url: Enviroment.BACKEND_URL+'/app/authenticated/getpatients',
        withCredentials:true
    };
    axios(config)
        .then(function (response) {
            callback(response.data.responce)
        })
        .catch(function (error) {
            console.log(error);
        });
}
export default patients;