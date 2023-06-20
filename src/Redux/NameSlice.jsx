import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState: [],
    reducers:{
        addName(state,action){
            state.push(action.payload);
        },
        removeName(state,action){
            state.splice(action.payload,1);
        },
        removeAllNames(state,action){
            return [];
        }
    }
})

export const nameReducer = nameSlice.reducer;
export const { addName, removeName, removeAllNames} = nameSlice.actions;