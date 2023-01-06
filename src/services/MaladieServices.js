import axios from 'axios';


const API_URL = 'http://localhost:8083/maladie';

class MaladieServices{
    getAllMaladies(){

        return axios.get(API_URL+"/all");
    }

    addMaladie(maladie){
        axios.post(API_URL+"/add", maladie)
    }
}
export default new MaladieServices();