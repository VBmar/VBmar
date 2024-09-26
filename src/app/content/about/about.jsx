import "./about.css";
import SkillIcon from "./skill_icon/skill_icon";

function AboutSection() {
    return (
        <div id="about_section_container">
            <h1>About</h1>
            <div>
                <h2>About Creator</h2>
                <div id="about_creator_text">
                    <p>"I have no Idea what the hell I should write here"</p>
                </div>
            </div>
            <div id="skills_container">
                <h2>Skills</h2>
                <div id="skills">
                    <SkillIcon data={Skills.HTML}></SkillIcon>
                    <SkillIcon data={Skills.CSS}></SkillIcon>
                    <SkillIcon data={Skills.JS}></SkillIcon>
                    <SkillIcon data={Skills.TS}></SkillIcon>
                    <SkillIcon data={Skills.React}></SkillIcon>
                    <SkillIcon data={Skills.Node}></SkillIcon>
                </div>
            </div>
        </div>
    );
}

const Skills = {
    HTML : {
        icon : "/skills/html.svg",
        name : "HTML5"
    },
    CSS : {
        icon : "/skills/css.svg",
        name : "CSS3"
    },
    JS : {
        icon : "/skills/javascript.svg",
        name : "Javascript"
    },
    TS : {
        icon : "/skills/typescript.svg",
        name : "Typescript"
    },
    React : {
        icon : "/skills/react.svg",
        name : "React"
    },
    Node : {
        icon : "/skills/node_js.svg",
        name : "Node js"
    },
}

export default AboutSection;