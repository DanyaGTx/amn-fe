import { AxiosInstance } from "axios" 
export default (api: AxiosInstance) => ({
    getJobs: (page:number,job:string) => api.get(`/jobs.json?page=${page}&lead_category=${job}`),
  })
  