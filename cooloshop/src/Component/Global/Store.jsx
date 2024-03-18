import {configureStore } from "@reduxjs/toolkit";
import { persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import myReducer from "./Features";



const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, myReducer);


export const store = configureStore({
    reducer:{persistedReducer},
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[PERSIST]
        }
    })
})