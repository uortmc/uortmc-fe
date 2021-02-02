
import Enviroment from "../../settings";
var axios = require('axios');
var qs = require('qs');
function username(callback) {
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
export default username