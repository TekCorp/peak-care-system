import axios from 'axios'

export const login = (userLogin)=>{ return async(dispatch) => {

    try {
        dispatch({
            type: 'USER_LOGIN_REQUEST'
        })
        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data}= await axios.post('/api/users/login', userLogin, config)

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data) )
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }

}}

export const logout = ()=>{ return (dispatch) => {

    localStorage.removeItem('userInfo')
    localStorage.removeItem('googleUserData')
    dispatch({type: 'USER_LOGOUT' })
    dispatch({type: 'USER_DETAILS_RESET'})
    dispatch({type: 'MY_ORDER_LIST_RESET'})
    dispatch({type: 'USER_LIST_RESET'})

}}