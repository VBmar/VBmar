import './light_column.css'

function LightColumn(props) {
    return (
        <div className='light_column'>
            <div className="color_column" style={{background : `linear-gradient(180deg, ${props.color} 0%, ${props.color} 70%, ${props.next_color} 100%)`}}></div>
            <div className="white_column" style={{background : WhiteGradient(props.side)}}></div>
        </div>
    )
}

function WhiteGradient(direction) {
    if(direction == 'right') return `linear-gradient(270deg, #FFFFFFFF 0%, #FFFFFF00 100%)`;
    else return `linear-gradient(90deg, #FFFFFFFF 0%, #FFFFFF00 100%)`;
}

export default LightColumn;