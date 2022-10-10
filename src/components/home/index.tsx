import style from "./home.module.scss";
import photo from "../../assets/images/photo.jpg";
import LinkButton from "../../common/uiToolkit/LinkButton";



const Home = () => {
    const sectionClassName = `${style.home} darkOverlay`;

    return (
        <section id={"home"} className={sectionClassName}>
            <div className={style.container}>
                <div>{/*Fade*/}
                    <div className={style.greetingText}>
                        <p>Hello & Welcome!</p>
                        <h1>I am Alexandr Kayuda</h1>
                        <h4>A front-end developer.</h4>
                        <LinkButton url={"#contacts"} variant={"outlined"}>Hire me</LinkButton>
                    </div>
                </div>
                <div>{/*Fade*/}
                    <div className={style.mainPhoto}>
                        <img src={photo} alt={"Alexandr Kayuda"}/>
                    </div>
                </div>
            </div>
            <div className={style.scrollDown}>
                <a href={"#about"} className={style.scroll}>
                    <i className={`${style.arrow} ${style.down}`}/>
                </a>
            </div>
        </section>
    );
};
export default Home
