import './vbmar_navbar.css';
import { useSelector } from 'react-redux';

function VBmarNavbar() {

    const Theme = useSelector((state) => state.Theme.theme)

    return (
        <nav id="navbar" style={{color : Theme.main_color}}>
            <button>About</button>
            <button>Projects</button>
            <button>Other</button>
            <button>Contact</button>
        </nav>
    );
}

export default VBmarNavbar;