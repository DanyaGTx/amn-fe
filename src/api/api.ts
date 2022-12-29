import jobs from './services/jobs'
import categories from './services/categories'
import { apiRoot } from './instance'

const api = {
    jobs: jobs(apiRoot),
    categories: categories(apiRoot),
}
export { api }
