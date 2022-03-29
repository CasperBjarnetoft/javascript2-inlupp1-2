import axios from 'axios'
import router from "@/router"

export default {
    state: {
        userToken: null,
        loggedIn: false,
    },
    getters: {
        loggedIn: state => state.loggedIn
    },
    mutations: {
        SET_USER: (state, token) => {
            if(token) {
                state.userToken = token
                state.loggedIn = true
            } 
            else {
                state.loggedIn = false,
                state.userToken = null
            }
        },
    },
    actions: {
        login: async ({commit}, payload) => {
            const res = await axios.post('http://localhost:9999/api/users/login', payload.user)
            if(res.status == 200) {
                localStorage.setItem('token', res.data.token)
                commit('SET_USER', res.data.token)
   
                if(payload.route) {
                    router.push(payload.route)
                }
                else {
                    router.push({ name: 'home'})
                }
            }
        },
        logout: ({commit}) => {
            try {
                localStorage.removeItem('token')
                commit('SET_USER', null)
            }   catch {
                console.log('not logged in')
            }
        },
        register: async ({commit}, payload) => {
            const res = await axios.post('http://localhost:9999/api/users/register', payload.user)
                localStorage.setItem('token', res.data.token)
                commit('SET_USER', res.data.token)

                if(payload.route) {
                    router.push(payload.route)
                }
                else {
                    router.push({ name: 'home'})
                }
        },
    }
}