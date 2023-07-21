import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    value: AuthState;
}

type AuthState = {
    isAuth: boolean,
    user: {
        name: string,
        email: string,
        photo: string,
        uid: string
    }
}

const initialState = {
    value : {
        isAuth: false,
        user: {
            name: "",
            email: "",
            photo: "",
            uid: ""
        },
    } as AuthState
} as InitialState

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            return {
                value: {
                    isAuth: true,
                    user: action.payload
                }
            }
        },
        logOut: () => {
            return initialState
        }
    }
})

export const {
    logIn,
    logOut
} = authSlice.actions

export default authSlice.reducer