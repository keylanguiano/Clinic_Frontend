export const state = () => ({
    doctor: null,
    token: null,
    TotalPrice: parseInt(localStorage.getItem('TotalPrice'), 10) || 0
})

export const mutations = {
    setDoctor (state, user) {
        state.user = user
    },
    setToken (state, token) {
        state.token = token
    },
    clearDoctor (state) {
        state.doctor = null
        state.token = null
    },
    setTotalPrice (state, price) {
        state.TotalPrice = price
        localStorage.setItem('TotalPrice', price)
    }
}

export const getters = {
    isAuthenticated: state => !!state.user,
    getDoctor: state => state.user,
    getToken: state => state.token,
    getTotalPrice: state => state.TotalPrice
}
