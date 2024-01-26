//Imports
import { configureStore } from "@reduxjs/toolkit";
import { housingsReducer } from "./slices/housingsSlice";

//Exports
const store = configureStore({
    reducer: {
        housings: housingsReducer,
    },
});

export default store;
