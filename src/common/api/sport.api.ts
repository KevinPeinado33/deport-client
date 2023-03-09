import axios from 'axios'

export const sportApi = axios.create({
    baseURL: 'https://localhost:3000/api'
})
