import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
export default configureStore

configureStore({
    reducer: {
        user:UserSlice.reducer

    }
})