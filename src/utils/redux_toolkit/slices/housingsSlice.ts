//Imports
import { createSlice } from "@reduxjs/toolkit";
import { Housing } from "../../../types/housing";

//Types
type Housings = {
    list: Housing[];
    loaded: boolean;
};

//Slice
const initialState: Housings = {
    list: [],
    loaded: false,
};

const housingsSlice = createSlice({
    name: "housings",
    initialState,
    reducers: {
        loadHousings: (state, action) => {
            state.list = action.payload;
            state.loaded = true;
        },
    },
});

//Exports
export const housingsReducer = housingsSlice.reducer;
export const { loadHousings } = housingsSlice.actions;
export const selectHousings = (state: any) => state.housings;
