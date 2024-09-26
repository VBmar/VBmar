import { createSlice } from "@reduxjs/toolkit";

const Themes = {
    Light : {
        main_color : "#FFFFFF",
        reverse_main_color : "#000000",
        surface_color : "#EEEEEE",
        logo : "/logo/VBmar_logo.svg",
        theme_logo : "/other/sun.svg"
    },
    Dark : {
        main_color : "#15141A",
        reverse_main_color : "#FFFFFF",
        surface_color : "#2B2A33",
        logo : "/logo/VBmar_logo_dark.svg",
        theme_logo : "/other/moon.svg"
    }
}

export const LocalStorageThemeKey = "@{VBmarTheme}@";

const initialState = {
    theme : localStorage.getItem(LocalStorageThemeKey) == "Dark"? Themes.Dark : Themes.Light,
}

const ThemeSlice = createSlice({
    name : "theme",
    initialState,
    reducers : {
        changeTheme : (state) => {
            if(localStorage.getItem(LocalStorageThemeKey) == "Light") {
                localStorage.setItem(LocalStorageThemeKey, "Dark");
                state = Themes.Dark
            }
            else {
                localStorage.setItem(LocalStorageThemeKey, "Light");
                state = Themes.Light
            }
            location.reload();
        }
    }
})


export default ThemeSlice;
export const { changeTheme } = ThemeSlice.actions;