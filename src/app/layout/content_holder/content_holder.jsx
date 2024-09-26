import './content_holder.css';
import LightColumn from './light_column/light_column';

function ContentHolder(props) {
    return (
        <div className="content_holder">
            <LightColumn side="right" color={props.data.color} next_color={props.data.next_color}></LightColumn>
            <div className="content">
                <img src={props.data.synbol} height={props.data.height} width={props.data.width} style={getSide(props.data.symbol_side)}/>
                {props.children}
            </div>
            <LightColumn side="left" color={props.data.color} next_color={props.data.next_color}></LightColumn>
        </div>
    );
}

function getSide(side) {
    if(side == "right") return {right : `30px`}
    else return {left : `30px`}
}

export default ContentHolder;