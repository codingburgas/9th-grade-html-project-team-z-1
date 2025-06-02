import { $host, $authHost } from "./index";

export const getFireEngines = async (limit = 5, page) => {
    const {data} = await $host.get('/api/fireengine', {config: {
        limit, page
    }})
    return data
}

export const getOneFireEngine = async (id) => {
    const {data} = await $host.get(`api/fireengine${id}`)
    return data
}

export const addFireEngine = async (fireEngine) => {
    const {data} = await $host.post('/api/fireengine', fireEngine)
    return data
}

export const deleteFireEngine = async (id) => {
    const {data} = await $host.delete('/api/fireengine', id)
    return data
}

export const assignAccidentToEngine = async (accidentId) => {
    const {data} = await $host.patch('/api/fireengine',  accidentId)
    return data
}