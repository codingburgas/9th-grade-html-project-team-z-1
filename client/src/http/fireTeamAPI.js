import { $host, $authHost } from './index';

export const getTeams = async (limit = 5, page) => {
    const {data} = await $host.get('/api/fireTeam', {config: {
        limit, page
    }})
    return data
}

export const getOneTeam = async (id) => {
    const {data} = await $host.get(`/api/fireteam${id}`)
    return data
}

export const addTeam = async (fireTeam) => {
    const {data} = await $host.post('/api/fireteam', fireTeam)
    return data
}

export const deleteTeam = async (id) => {
    const {data} = await $host.delete('/api/fireteam', id)
    return data
}

export const assignTeamToStation = async (props) => {
    const {id, fireStationId} = props
    const {data} = await $authHost.patch(`/api/fireteam/${id}/assign-to-station`, {fireStationId})
    return data
}