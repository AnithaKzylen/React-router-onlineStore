import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Reducer/CartSlice.js";

const store = configureStore({
    reducer : {
        cart:CartSlice,
    }

    
})

export default store;