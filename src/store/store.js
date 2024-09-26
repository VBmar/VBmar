import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./theme";

const Store = configureStore({
    reducer : {
        Theme : ThemeSlice.reducer,
    }
});

export default Store;