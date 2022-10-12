import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000', 
    headers: {
        'Content-Type': 'application/json'
    }})

export function getDataJson() {
    return instance.get("/json");
}