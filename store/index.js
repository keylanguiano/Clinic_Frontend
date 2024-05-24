export const state = () => ({
    user: null,
    token: null
})

export const mutations = {
    setUser (state, user) {
        state.user = user
    },
    setToken (state, token) {
        state.token = token
    },
    clearUser (state) {
        state.user = null
        state.token = null
    }
}

export const getters = {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user,
    getToken: state => state.token
}
