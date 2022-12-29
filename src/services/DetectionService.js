import axios from 'axios';


const API_URL = 'http://localhost:8083/detection/';

class DetectionServices{
    getAllDetections(){
        return axios({url: API_URL,method: "GET"})
    }

    getAllDetectionsById(id){
        return axios.post(API_URL+"/get?id="+id)
    }
}
export default new DetectionServices();