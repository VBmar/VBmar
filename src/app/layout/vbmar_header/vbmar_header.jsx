import './vbmar_header.css';
import VBmarNavbar from './vbmar_navbar/vbmar_navbar';
import ThemeButton from './theme_button/theme_button';
import { useSelector } from 'react-redux';

function VBmarHeader() {
    const Theme = useSelector((state) => state.Theme.theme)

    return (
        <header style={{ backgroundColor : Theme.reverse_main_color }}>
            <img src={Theme.logo} alt="" height="60" width="60"/>
            <VBmarNavbar></VBmarNavbar>
            <ThemeButton></ThemeButton>
        </header>
    );
}

export default VBmarHeader;