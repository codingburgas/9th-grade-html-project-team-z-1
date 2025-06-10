import { $authHost, $host } from './index'

export const getFirefighters = async (limit = 5, page) => {
    const {data} = await $host.get('/api/firefighter', {params: {
        limit, page
    }})
    return data
}

export const getOneFirefighter = async (id) => {
    const {data} = await $host.get(`/api/firefighter/${id.id}`)
    return data
}

export const addFirefighter = async (firefighter) => {
    const {data} = await $authHost.post('/api/firefighter', firefighter, )
    return data
}

export const deleteFirefighter = async (id) => {
    const {data} = await $authHost.delete('/api/firefighter', id)
    return data
}

export const assignFirefighter = async (id, fireTeamId) => {
    const {data} = await $host.patch(`/api/${id}/assign-to-team`, fireTeamId)
    return data
}