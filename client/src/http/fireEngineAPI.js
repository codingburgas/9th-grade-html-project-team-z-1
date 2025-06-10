import { $host, $authHost } from "./index";

export const getFireEngines = async (limit = 5, page) => {
    const {data} = await $host.get('/api/fireengine', {config: {
        limit, page
    }})
    return data
}

export const getOneFireEngine = async (id) => {
    const {data} = await $host.get(`api/fireengine/${id.id}`)
    return data
}

export const addFireEngine = async (fireEngine) => {
    const {data} = await $authHost.post('/api/fireengine', fireEngine)
    return data
}

export const deleteFireEngine = async (id) => {
    const {data} = await $authHost.delete('/api/fireengine', id)
    return data
}

export const assignAccidentToEngine = async (id, accidentId) => {
    const {data} = await $host.patch(`/api/fireengine/${id.id}/assign-accident`,  accidentId)
    return data
}

export const assignEngineToTeam = async (props) => {
    const {id, fireTeamId} = props
    const {data} = await $host.patch(`/api/fireengine/${id}/assign-team`,  {fireTeamId})
    return data
}