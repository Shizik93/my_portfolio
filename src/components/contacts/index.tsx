import SectionTitle from "../../common/uiToolkit/SectionTitle";
import style from './contacts.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./contactForm";
import {Slide} from "react-awesome-reveal";

const Contacts = () => {
    return (
        <section style={{minHeight: "85vh"}} id={"contacts"}>
            <div className={"container"}>
                <Slide triggerOnce={true} direction={'up'}>
                    <SectionTitle title={"Contact"} subtitle={"Get in touch"}/>
                    <div>
                        <div className={style.contactsContent}>
                            <div className={style.contactsList}>
                                <h4>Contacts</h4>
                                <p>
                <span className={style.icon}>
                  <FontAwesomeIcon icon={faPhone}/>
                </span>
                                    <a href={"tel:+79185010621"}>+79185010621</a>
                                </p>
                                <p>
                <span className={style.icon}>
                  <FontAwesomeIcon icon={faEnvelope}/>
                </span>
                                    <a href={"mailto:akayuda999@gmail.com"}>akayuda999@gmail.com</a>
                                </p>
                                <h4>Follow me</h4>
                                <div className={style.socialContacts}>
                                    <a
                                        className={`${style.socialIcon} ${style.muted}`}
                                        href={"https://t.me/shizik161"}
                                        title={"My Telegram"}
                                    >
                                        <FontAwesomeIcon icon={faTelegram} className={style.icon}/>
                                    </a>
                                    <a
                                        className={`${style.socialIcon} ${style.muted}`}
                                        href={"https://github.com/Shizik93"}
                                        title={"My profile on GitHub"}
                                    >
                                        <FontAwesomeIcon icon={faGithub} className={style.icon}/>
                                    </a>
                                    <a
                                        className={`${style.socialIcon} ${style.muted}`}
                                        href={"https://www.linkedin.com/in/aleksandr-kayuda-319235248"}
                                        title={"My Linkedin profile"}
                                    >
                                        <FontAwesomeIcon icon={faLinkedinIn} className={style.icon}/>
                                    </a>
                                </div>
                            </div>
                            <div className={style.formContainer}>
                                <h4>Send me a note</h4>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};
export default Contacts
