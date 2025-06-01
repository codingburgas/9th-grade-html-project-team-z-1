import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
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