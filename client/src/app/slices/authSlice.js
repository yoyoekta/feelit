import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const {user} = action.payload;
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;