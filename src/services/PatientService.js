import axios from "axios";

const API_URL = 'http://localhost:8083/patient/'

class PatientService{
    getAllPatients(){
        return axios.get(API_URL+"all")
    }

    getPatientById(id){
        return axios.post(API_URL+"get?id="+id)
    }

    
}
export default new PatientService();