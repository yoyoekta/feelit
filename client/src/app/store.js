import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import detailsReducer from './slices/detailsSlice';
import userReducer from './slices/userSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        cart: cartReducer,
        details: detailsReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

