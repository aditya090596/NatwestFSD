import axios from "axios";

export const login = (values) => {
    console.log(values);
    return axios.post(`http://localhost:8080/employee/login`, values)
};

export const register = (values) => {
    return axios.post(`http://localhost:8080/employee/register`, values)
}