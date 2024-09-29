import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../../hooks/interfaces/Atuh.interfaces';

interface User {
    id: number;
    username: string;
    email: string;
    name: string;
    token: string
}

interface AuthState {
    status: string
    message: string;
    user: User | null;
}

const initialState: AuthState = {
    user: null,
    status: '',
    message: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLogin: (state, action: PayloadAction<LoginResponse>) => {
            state.user = action.payload.user;
            state.status = action.payload.status;
            state.message = action.payload.message;
            localStorage.setItem('status', action.payload.status);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('message', action.payload.message);
        },
        onLogout: (state) => {
            state.user = null;
            state.message = '';
            state.status = '';
            localStorage.removeItem('status');
            localStorage.removeItem('user');
            localStorage.removeItem('message');
        },
    },
});

export const { onLogin, onLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
