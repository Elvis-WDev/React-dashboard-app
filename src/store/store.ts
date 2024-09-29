import { configureStore } from '@reduxjs/toolkit';
import { authReducer, uiReducer } from './';

const store = configureStore({

    reducer: {

        auth: authReducer,
        ui: uiReducer,

    },

    middleware: (getDefaultMiddelware) => getDefaultMiddelware({

        serializableCheck: true

    })

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;