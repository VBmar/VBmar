import "./skill_icon.css";

function SkillIcon(props) {
    return (
        <div className="skill_icon">
            <div>
                <img src={props.data.icon} height="70" width="70"></img>
            </div>
            <p>{props.data.name}</p>
        </div>
    );
}

export default SkillIcon;