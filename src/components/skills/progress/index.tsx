import style from "./progress.module.scss"

const Progress = ({progress}: ProgressPropsType) => {
    const progressLineStyle = {width: `${progress}%`};

    return (
        <div className={style.progress}>
            <div className={style.progressBar} style={progressLineStyle}/>
        </div>
    )
}
export default Progress

type ProgressPropsType = {
    progress: number
}
