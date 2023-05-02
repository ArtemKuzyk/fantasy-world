import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from './todoSlice';
import bagItemSlice from "./bagItemSlice";

export default configureStore({
    reducer : {
        bagItemDisplay : bagItemSlice
    }
})