import { $authHost, $host } from "./index";

export const fetchTypes = async () => {
    const {data} = await $host.get('/api/accidenttype')
    return data
}

export const createType = async (type) => {
    const {data} = await $authHost.post('/api/accidenttype', type)
    return data
}

export const deleteType = async (type) => {
    const {data} = await $authHost.delete('/api/accidenttype', type)
    return data
}

export const fetchAccidents = async (startDate, endDate, typeId, limit = 5, page) => {
    const {data} = $host.get('/api/accident', {params: {
        startDate, endDate, typeId, limit, page
    }})
    return data
}

export const fetchOneAccident = async (id) => {
    const {data} = $host.get(`/api/accident/${id}`)
    return data
}

export const createAccident = async (accident) => {
    const {data} = $host.post('/api/accident', accident)
    return data
}

export const deleteAccident = async (id) => {
    const {data} = $authHost.delete('/api/accident', id)
    return data
}

export const changeAccidentState = async (id, state) => {
    const {data} = $authHost.patch(`/api/accident${id}`, state)
    return data
}