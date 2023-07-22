import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: 'active',
    initialState: false,
     
    reducers: {
         activeAction(state, action) {
            return state =  action.payload
        }
    }
})

export const { activeAction } = activeSlice.actions; 
export const activeReducer = activeSlice.reducer;