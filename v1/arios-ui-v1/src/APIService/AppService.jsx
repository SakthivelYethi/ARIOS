import axios from "axios"

const APP_API_BASE_URL =  "http://localhost:9090/app/";
const USER_API_BASE_URL =  "http://localhost:9090/user/";

class AppService {
    
    saveApplication(application) {
        return axios.post(APP_API_BASE_URL , application);
    }

    getApplications() {
        return axios.get(APP_API_BASE_URL);
    }

    getApplicationById(id) {
        return axios.get(APP_API_BASE_URL+"/"+id);
    }

    getApplicationsDTO() {
        return axios.get(APP_API_BASE_URL+"dto");
    }
}

export default new AppService();