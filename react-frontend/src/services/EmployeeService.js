import axios from "axios";
const EMP_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService{
    getEmployees(){
        return axios.get(EMP_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMP_API_BASE_URL,employee);
    }
}

export default new EmployeeService()