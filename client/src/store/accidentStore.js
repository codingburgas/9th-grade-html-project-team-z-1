import { makeAutoObservable } from "mobx"

export default class AccidentStore {
    constructor() {
        this._types = []
        this._accidents = []
        this._selectedType = {}
        this._latLng = {}
        this._page = 1
        this._limit = 5
        this._totalCount = 0
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setAccidents(accidents) {
        this._accidents = accidents
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setlatLng(latLng) {
        this._latLng = latLng
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }

    get accidents() {
        return this._accidents
    }

    get selectedType() {
        return this._selectedType
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