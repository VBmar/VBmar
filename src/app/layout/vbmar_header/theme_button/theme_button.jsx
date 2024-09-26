import "./theme_button.css";
import { changeTheme } from "../../../../store/theme";
import { useDispatch, useSelector } from "react-redux";

function ThemeButton() {

    const Theme = useSelector((state) => state.Theme.theme);
    const dispatch = useDispatch();

    return (
        <div id="theme_button_container">
            <button onClick={() => dispatch(changeTheme())} style={{ backgroundColor : Theme.main_color}}>
                <img src={Theme.theme_logo} height="30" width="30"></img>
            </button>
        </div>
    );
}

export default ThemeButton;