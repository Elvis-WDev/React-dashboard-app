import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface themePayload {
    theme: string
}

interface ui {
    theme: string;
}

const initialState: ui = {
    theme: 'light'
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onThemeMode: (state, action: PayloadAction<themePayload>) => {
            state.theme = action.payload.theme;
        },
    },
});

export const { onThemeMode } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
