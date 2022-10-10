import style from "./skills.module.scss"

import LinkButton from "../../common/uiToolkit/LinkButton";
import Skill from "./skill";
import SectionTitle from "../../common/uiToolkit/SectionTitle";

const Skills = () => {
    const skills = [
        {id: 1, title: "HTML", icon: "html5", progress: 90},
        {id: 2, title: "CSS", icon: "css3", progress: 85},
        {id: 3, title: "JavaScript", icon: "js", progress: 75},
        {id: 4, title: "React", icon: "react", progress: 70},
        {id: 5, title: "Redux", icon: "redux", progress: 70},
    ];

    return (
        <section id={"skills"}>

            <div className={"container"}>
                <SectionTitle title={"Resume"} subtitle={"Skills"}/>
                <div className={style.blockTitle}>
                    <h3>My Skills</h3>
                </div>
                {skills.map(skill => {
                    return <Skill icon={skill.icon} progress={skill.progress} title={skill.title} key={skill.id}/>
                })}

                <div  className={style.skillsFooter}>
                    <LinkButton url={'cvFileLink'} target={"_blank"}>Download CV</LinkButton>
                </div>
            </div>

        </section>
    );
};

export default Skills
