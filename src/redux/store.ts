import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/CartReducer";
import { authReducer } from "./reducers/AuthReducer";


export const store = configureStore({
    reducer: {
        cartReducer : cartReducer.reducer,
        authReducer : authReducer.reducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
