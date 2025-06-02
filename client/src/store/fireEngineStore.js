import { makeAutoObservable } from "mobx";

export default class FireEngineStore {
    constructor() {
        this._fireEngines = []
        this._limit = 3
        this._page = 1
        this._totalCount = 0
        makeAutoObservable(this)
    }

    setFireEngines(fireEngines) {
        this._fireEngines = fireEngines
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get fireEngines() {
        return this._fireEngines
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }
}