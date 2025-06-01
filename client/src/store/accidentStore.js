import { makeAutoObservable } from "mobx"

export default class AccidentStore {
    constructor() {
        this._types = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this.isAuth = bool
    }

    setIsUser(user) {
        this.user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this.user
    }
}