import './vbmar_header.css';
import VBmarNavbar from './vbmar_navbar/vbmar_navbar';
import ThemeButton from './theme_button/theme_button';

function VBmarHeader() {
    return (
        <header>
            <img src="/logo/VBmar_logo.svg" alt="" height="60" width="60"/>
            <VBmarNavbar></VBmarNavbar>
            <ThemeButton></ThemeButton>
        </header>
    );
}

export default VBmarHeader;