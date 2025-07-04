import { $authHost, $host } from "./index";

export const fetchTypes = async () => {
    const {data} = await $host.get('/api/accidenttype')
    return data
}

export const createType = async (type) => {
    const {data} = await $authHost.post('/api/accidenttype', type)
    return data
}

export const deleteType = async (typeId) => {
    const {data} = await $authHost.delete('/api/accidenttype', {
        data: {id: typeId}
    })
    return data
}

export const fetchAccidents = async (props) => {
    const {data} = await $host.get('/api/accident', {params: props})
    return data
}

export const fetchOneAccident = async (id) => {
    const {data} = await $host.get(`/api/accident/${id}`)
    return data
}

export const createAccident = async (accident) => {
    const {data} = await $host.post('/api/accident', accident)
    return data
}

export const deleteAccident = async (id) => {
    const {data} = await $authHost.delete('/api/accident', id)
    return data
}

export const changeAccidentState = async (id, state) => {
    const {data} = await $authHost.patch(`/api/accident${id}`, state)
    return data
}