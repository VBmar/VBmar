import './vbmar_header.css';
import VBmarNavbar from './vbmar_navbar/vbmar_navbar';

function VBmarHeader() {
    return (
        <header>
            <img src="/logo/VBmar_logo.svg" alt="" height="60" width="60"/>
            <VBmarNavbar></VBmarNavbar>
        </header>
    );
}

export default VBmarHeader;