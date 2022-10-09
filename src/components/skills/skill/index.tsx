import style from './skill.module.scss'
import Progress from "../progress";

const Skill = ({title, icon, progress}: SkillPropsType) => {


    const iconStyle = `${style.icon}${icon ? " " + style[icon] : ""}`;

    return (

        <div style={{display:'flex',justifyContent:"center"}}>
            <div className={style.skill}>
                <div className={style.iconBox}>
                    <div className={iconStyle}/>
                </div>
                <div className={style.description}>
                    <p className={style.title}>
                        {title}
                        <span>
            {progress}%
          </span>
                    </p>
                    <Progress progress={progress}/>
                </div>
            </div>
        </div>
    );
};
export default Skill

type SkillPropsType = {
    title: string
    icon: string
    progress: number
}
