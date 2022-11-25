import axios from "axios"

const APP_API_BASE_URL =  "http://localhost:9191/";
const API_USER_MODULE_URL =  "user/";

class AppService {
    
    saveUser(user) {
        return axios.post(APP_API_BASE_URL + API_USER_MODULE_URL  , user);
    }

}

export default new AppService();