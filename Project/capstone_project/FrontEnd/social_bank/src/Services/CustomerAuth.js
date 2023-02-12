import axios from "axios";

export const login = (values) => {
    return axios.post(`http://localhost:8080/customer/login`, values)
};

export const register = (values) => {
    return axios.post(`http://localhost:8080/customer/register`, values)
}