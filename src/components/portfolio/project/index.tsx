import s from "./project.module.scss";
import {useState} from "react";
import {createPortal} from "react-dom";
import ModalBox from "../../../common/uiToolkit/ModalBox";

const Project = ({project}:ProjectPropsType) => {


    const [isShown, setIsShown] = useState(false);

    const previewImageStyle = {
        backgroundImage: `url(${project.previewImage})`,
    };

    return (
        <>
            <div className={s.project} onClick={() => setIsShown(true)}>
                <div className={s.info}>
                    <div className={s.previewImage} style={previewImageStyle}/>
                    <h4>{project.title}</h4>
                </div>
                <div className={s.overlay}>
                    <div className={s.detailsLink}>Show project</div>
                </div>
            </div>

            {createPortal(
                <ModalBox isShown={isShown} setIsShown={setIsShown}>
                    <div className={s.modalProject}>
                        <h2>{project.title}</h2>
                        <div className={s.projectInfo}>
                            <div className={s.projectImage}>
                                <img src={project.previewImage} alt={project.title}/>
                            </div>
                            <div className={s.projectDescription}>
                                <h4>Project Info:</h4>
                                <p>{project.description}</p>
                                <h4>Project Details:</h4>
                                <ul>
                                    <li><span>Technologies:</span> {project.stack}</li>
                                    <li><span>Date:</span> {project.period}</li>
                                    <li>
                                        <span>URL:</span>
                                        <a
                                            href={project.gitHubPagesURL}
                                            title={"See project on GitHub Pages"}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            View on GitHub Pages
                                        </a>
                                    </li>
                                    <li>
                                        <span>Source Code:</span>
                                        <a
                                            href={project.sourceCodeURL}
                                            title={"See project code on GitHub"}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            View on GitHub
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ModalBox>,
                document.getElementById("root")as HTMLElement
            )}
        </>
    );
};
type ProjectPropsType={
    project:ProjectType
}
type ProjectType={
    id:number
    title:string,
    previewImage:string,
    sourceCodeURL:string,
    gitHubPagesURL:string,
    stack:string,
    description:string,
    period:string,
}
export default Project
