import axios from 'axios'

const apiRoot = axios.create({
  baseURL: 'https://leads-management.herokuapp.com/api/v1'
})

export { apiRoot }
