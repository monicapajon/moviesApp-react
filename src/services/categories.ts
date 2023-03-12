import { AddCategoryForm } from "../types"
import { api } from "../utils/axios"

const add = async (category: AddCategoryForm) => {


    const response = await api.post('/categories.json', category)

    return response.data

}

const getAll = async () => {

    const response = await api.get('/categories.json')

    return response.data

}
export const servicesCategory = { add, getAll }