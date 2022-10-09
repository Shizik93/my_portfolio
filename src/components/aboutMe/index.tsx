import style from './aboutMe.module.scss'
import SectionTitle from "../../common/uiToolkit/SectionTitle";
import LinkButton from "../../common/uiToolkit/LinkButton";

const AboutMe = () => {
    return (
        <section id={"about"}>
            <div className={"container"}>
                <SectionTitle title={"About me"} subtitle={"Know Me More"}/>
                <div className={style.aboutContent}>
                    <div className={style.aboutText}>
                        <h3>I'm <span className={style.textPrimary}>Alexander Kayuda</span>, a Front-end Developer
                        </h3>
                        <p>
                            <br/>
                            <br/>

                        </p>
                        <p>
                        </p>
                    </div>
                    <div className={style.aboutContacts}>
                        <ul>
                            <li>
                                <b>Name:</b> Kayuda Alexandr
                            </li>
                            <li>
                                <b>Phone:</b> <a href={"tel:+79185010621"}>+79185010621</a>
                            </li>
                            <li>
                                <b>Email:</b> <a href={"mailto:akayuda999@gmail.com"}>akayuda999@gmail.com</a>
                            </li>
                            <li>
                                <b>From:</b> Rostov-on-Don, Russia
                            </li>
                        </ul>
                        <LinkButton url={'s'} variant={'"_blank"'}>Download CV</LinkButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutMe
