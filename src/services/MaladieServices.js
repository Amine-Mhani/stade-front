import axios from 'axios';


const API_URL = 'http://localhost:8083/maladie/all';

class MaladieServices{
    getAllMaladies(){
        return axios({url: API_URL,method: "GET"})
    }
}
export default new MaladieServices();