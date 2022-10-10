import style from './aboutMe.module.scss'
import SectionTitle from "../../common/uiToolkit/SectionTitle";
import LinkButton from "../../common/uiToolkit/LinkButton";
import {Slide} from "react-awesome-reveal";
import myCV from '../../assets/files/alexKayudaEn.pdf'

const AboutMe = () => {
    return (
        <section id={"about"}>
            <div className={"container"}>
                <Slide triggerOnce={true} direction={'up'}>
                    <SectionTitle title={"About me"} subtitle={"Know Me More"}/>
                </Slide>

                <div className={style.aboutContent}>
                    <div className={style.aboutText}>
                        <h3>I'm <span className={style.textPrimary}>Alexander Kayuda</span>, a Front-end Developer
                        </h3>
                        <p>I am a frontend developer with experience SPA development using React, Redux, TypeScript,
                            JavaScript, SCSS, HTML. <br/>In my free time I delve into familiar technologies, improve my
                            skills, and also solve problems on Codewars, improve my knowledge of English. <br/>I will
                            consider options for remote work, work in the office (full-time), ready for relocation.
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
                        <LinkButton url={myCV} variant={'"_blank"'}>Download CV</LinkButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutMe
