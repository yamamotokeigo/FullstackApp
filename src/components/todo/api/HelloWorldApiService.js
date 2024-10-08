import axios from "axios"


const apiClient = axios.create(
    {
    baseURL: 'http://localhost:8080',
    withCredentials: true
    });

export function retrieveHelloWorldBean(){
    return apiClient({
        url: '/hello-world-bean',
        method: 'GET', // or 'POST' if it's a POST request
        headers: {
            'Origin': 'http://localhost:3000'
        }
    })
}

export function retrieveHelloWorldPathVariable(username){
    return apiClient({
        url: `/hello-world/path-variable/${username}`,
        method: 'GET', // or 'POST' if it's a POST request
        headers: {
            'Origin': 'http://localhost:3000'
        }
    })
}