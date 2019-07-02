import { LOGIN_REQUEST, LOGIN_ERROR } from '../actions/authActions'
import initialState from './initialState';

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return Object.assign({}, state, {
                authData: {
                    data: {
                        login: action.data.login,
                        password: action.data.password,
                        successEnter: true
                    },
                    error: {
                        status: false,
                        text: ''
                    }
                }
            })
        }
        case LOGIN_ERROR: {
            return Object.assign({}, state, {
                authData: {
                    data: {
                        login: '',
                        password: '',
                        successEnter: false
                    },
                    error: {
                        status: true,
                        text: action.data.text
                    }
                }
            })
        }
        default:
            return state
    }
}