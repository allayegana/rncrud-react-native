import React, { createContext, useReducer } from 'react'
import { act } from 'react-test-renderer';
import Users from '../data/Users';

const usersContext = createContext({})

const inicialState = { Users }

const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            Users: [...state.Users, user],
        }
    },

    updateUser(state, action) {
        const updated = action.payload
        return {
            ...state,
            Users: state.Users.map(u => u.id === updated.id ? updated: u )
        }
    },

    deleteUser(state, action) {
        const user = action.payload
        return {
            ...state, //se to recebendo mais variavel precisa sim
            Users: state.Users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state,action): state
    }

    const [state, dispatch] = useReducer(reducer, inicialState)

    return (
        <usersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </usersContext.Provider>
    )
}

export default usersContext