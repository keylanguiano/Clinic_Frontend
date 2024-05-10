// En el archivo store se colocan las variables globales con estado inicial y mutaciones

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
    }
}
