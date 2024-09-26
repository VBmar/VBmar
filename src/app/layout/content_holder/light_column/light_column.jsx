import './light_column.css'
import { useSelector } from 'react-redux';

function LightColumn(props) {

    const Theme = useSelector((state) => state.Theme.theme);

    function WhiteGradient(direction) {
        if(direction == 'right') return `linear-gradient(270deg, ${Theme.main_color}FF 0%, ${Theme.main_color}00 100%)`;
        else return `linear-gradient(90deg, ${Theme.main_color}FF 0%, ${Theme.main_color}00 100%)`;
    }
    

    return (
        <div className='light_column'>
            <div className="color_column" style={{background : `linear-gradient(180deg, ${props.color} 0%, ${props.color} 70%, ${props.next_color} 100%)`}}></div>
            <div className="white_column" style={{background : WhiteGradient(props.side)}}></div>
        </div>
    )
}


export default LightColumn;