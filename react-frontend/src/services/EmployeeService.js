import axios from "axios";
const EMP_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService{
    getEmployees(){
        return axios.get(EMP_API_BASE_URL);
    }
}

export default new EmployeeService()