export const authSuccess = (state, {
    user
}) => {
    state.status = 'success'
    state.user = user
}

export const authError = (state) => {
    state.status = 'error'
}

export const authLogout = (state) => {
    state.status = 'logout'
}

export const changePasswordSuccess = (state, {
    status
}) => {
    state.status = status
}