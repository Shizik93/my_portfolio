import style from './portfolio.module.scss'

import todoListImage from "../../assets/images/todolist.png";
import counter from "../../assets/images/counter.png";
import studyCards from "../../assets/images/cards.png";
import SectionTitle from "../../common/uiToolkit/SectionTitle";
import Project from "./project";
import {Slide} from "react-awesome-reveal";


export const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Study cards",
            previewImage: studyCards,
            sourceCodeURL: "https://github.com/Shizik93/cards-22-07",
            gitHubPagesURL: "https://shizik93.github.io/cards-22-07",
            stack: "TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Formik. Team development.",
            description: "Start-up project",
            period: "Mar. 2022 - July 2022",
        },
        {
            id: 2,
            title: "To-do list",
            previewImage: todoListImage,
            sourceCodeURL: "https://github.com/Shizik93/todolist",
            gitHubPagesURL: "https://shizik93.github.io/",
            stack: "TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Formik, TDD, Material UI.",
            description: "Educational project",
            period: "Sep. 2022 - Oct. 2022",
        },
        {
            id: 3,
            title: "Counter",
            previewImage: counter,
            sourceCodeURL: "https://github.com/Shizik93/counter",
            gitHubPagesURL: "https://shizik93.github.io/counter/",
            stack: "TypeScript, React, Redux.",
            description: "Educational project",
            period: "Sep. 2022",
        },
        {
            id: 4,
            title: "Social network",
            previewImage: 'SocialNetwork',
            sourceCodeURL: "https://github.com/Shizik93/social-nework-ts",
            gitHubPagesURL: "https://shizik93.github.io/social-nework-ts",
            stack: "TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Redux-Form, Reselect, TDD.",
            description: "Self-education project",
            period: "Mar. 2022 - May 2022",
        },


    ];

    return (
        <section id={"portfolio"}>
            <div className={"container"}>
                <Slide triggerOnce={true} direction={'down'}>
                    <SectionTitle title={"Portfolio"} subtitle={"My Projects"}/>
                </Slide>
                <div>
                    <div className={style.projectsList}>
                        {projects.map(p => <Project key={p.id} project={p}/>)}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Portfolio
