import axios from 'axios'

export const login = ({
    commit
}, user) => {
    return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_URL_API + 'login', user)
            .then(res => {
                const {
                    data: {
                        user
                    }
                } = res.data
                commit('authSuccess', {
                    user
                })

                resolve(res)
            })
            .catch(err => {
                commit('authError')

                reject(err);
            })
    })
}

export const logout = ({
    commit
}) => {
    return new Promise((resolve) => {
        commit('authLogout')

        resolve();
    })
}

export const changePassword = ({
    commit
}, user) => {
    return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_URL_API + 'change-password', user)
            .then(res => {
                commit('changePasswordSuccess', {
                    status: "success"
                })
                resolve(res)
            })
            .catch(err => {

                reject(err)
            })
    })
}