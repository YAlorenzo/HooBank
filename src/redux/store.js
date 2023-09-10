import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { activeReducer } from "./btnGetStart";

const rootReducer = combineReducers(
    {
        active: activeReducer
    }
)

const store = configureStore({
    reducer: rootReducer,
})

export default store;