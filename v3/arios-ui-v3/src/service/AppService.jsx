import axios from "axios"

const APP_API_BASE_URL =  "http://localhost:9191/";
const API_USER_MODULE_URL =  APP_API_BASE_URL + "user/";

class AppService {    
    getUsers() {
        return axios.get(API_USER_MODULE_URL);
    }
    saveUser(user) {
        return axios.post(API_USER_MODULE_URL  , user);
    }    
}

export default new AppService();