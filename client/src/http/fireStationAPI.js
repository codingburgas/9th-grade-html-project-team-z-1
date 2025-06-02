import { $host, $authHost } from './index';

export const getFireStations = async (limit = 5, page) => {
    const {data} = await $host.get('/api/firestation', {config: {
        limit, page
    }})
    return data
}

export const getOneFireStation = async (id) => {
    const {data} = await $host.get(`/api/firestation${id}`)
    return data
}

export const addFireStation = async (fireStation) => {
    const {data} = await $host.post('/api/firestation', fireStation)
    return data
}

export const deleteFireStation = async (id) => {
    const {data} = await $host.delete('/api/firestation', id)
    return data
}