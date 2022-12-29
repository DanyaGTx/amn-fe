import { AxiosInstance } from "axios" 
export default (api: AxiosInstance) => ({
    getCategories: () => api.get('/jobs/categories'),
})
  