import { makeAutoObservable } from "mobx";

export default class FireStationStore {
    constructor() {
        this._fireStations = []
        this._limit = 3
        this._page = 1
        this._totalCount = 0
        this._latlng = {}
        makeAutoObservable(this)
    }

    setFireStations(fireStations) {
        this._fireStanions = fireStations
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setlatLng(latLng) {
        this._latLng = latLng
    }

    get fireStations() {
        return this._fireStanions
    }

    get latLng() {
        return this._latLng
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }
}