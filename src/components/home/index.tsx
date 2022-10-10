import style from "./home.module.scss";
import photo from "../../assets/images/photo.jpg";
import LinkButton from "../../common/uiToolkit/LinkButton";
import {Slide} from "react-awesome-reveal";



const Home = () => {
    const sectionClassName = `${style.home} darkOverlay`;

    return (
        <section id={"home"} className={sectionClassName}>
            <div className={style.container}>
                <Slide triggerOnce={true}>
                    <div className={style.greetingText}>
                        <p>Hello & Welcome!</p>
                        <h1>I am Alexandr Kayuda</h1>
                        <h4>A front-end developer.</h4>
                        <LinkButton url={"#contacts"} variant={"outlined"}>Hire me</LinkButton>
                    </div>
                </Slide>
                <Slide triggerOnce={true} direction={"right"}  >
                    <div className={style.mainPhoto}>
                        <img src={photo} alt={"Alexandr Kayuda"}/>
                    </div>
                </Slide>
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
