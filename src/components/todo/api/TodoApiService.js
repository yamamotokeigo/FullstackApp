import axios from "axios"


const apiClient = axios.create(
    {
    baseURL: 'http://localhost:8080',
    withCredentials: true
    });

export function retrieveTodoForUsername(username){
    return apiClient({
        url: `/users/${username}/todo`,
        method: 'GET', // or 'POST' if it's a POST request
        headers: {
            'Origin': 'http://localhost:3000'
        }
    })
}

export function deleteTodoById(username, id){
    return apiClient({
        url: `/users/${username}/todo/${id}`,
        method: 'DELETE', // or 'POST' if it's a POST request
        headers: {
            'Origin': 'http://localhost:3000'
        }
    })
}