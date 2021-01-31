
import RequestSettings from "../../../settings";
var axios = require('axios');
var qs = require('qs');
function profile(callback) {
    var config = {
        method: 'get',
        url: RequestSettings.BACKEND_URL+'/app/authenticated/profile',
        withCredentials:true
    };
    axios(config)
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}
export default profile