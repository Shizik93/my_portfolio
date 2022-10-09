import style from "./sectionTitle.module.scss";


const SectionTitle = ({title, subtitle = "Some text"}: SectionTitlePropsType) => {
    return (
        <div>
            <div className={style.sectionTitle}>
                <h2>{title}</h2>
                <p className={style.subtitle}>
                    {subtitle}
                    <span className={style.headingSeparator}/>
                </p>
            </div>
        </div>
    );
};

export default SectionTitle

type SectionTitlePropsType = {
    title: string,
    subtitle: string
}
