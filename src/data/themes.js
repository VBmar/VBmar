const Themes = {
    Light : {
        background_color : "#FFFFFF",
        reverse_background_color : "#000000",
        surface_color : "#EEEEEE",
        logo : "/logo/VBmar_logo.svg",
        theme_icon : "/other/sun-svgrepo-com.svg",
    },
    Night : {
        background_color : "#000000",
        reverse_background_color : "#FFFFFF",
        surface_color : "#EEEEEE",
        logo : "/logo/VBmar_logo_night.svg",
        theme_icon : "/other/sun-svgrepo-com.svg",
    }
}

const THEME_LOCAL_STORAGE_KEY = "@{VBMAR_THEME}@";

export function checkTheme() {
    let theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)
    if(!theme) localStorage.setItem(THEME_LOCAL_STORAGE_KEY, "LIGHT")
}

export function getTheme() {
    let theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    if(theme == "NIGHT") return Themes.Night;
    else return Themes.Light;
}