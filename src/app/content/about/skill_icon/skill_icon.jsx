import "./skill_icon.css";
import { useSelector } from 'react-redux';

function SkillIcon(props) {

    const Theme = useSelector((state) => state.Theme.theme);

    return (
        <div className="skill_icon" style={{backgroundColor : Theme.surface_color}}>
            <div>
                <img src={props.data.icon} height="70" width="70"></img>
            </div>
            <p style={{color : Theme.reverse_main_color}} >{props.data.name}</p>
        </div>
    );
}

export default SkillIcon;