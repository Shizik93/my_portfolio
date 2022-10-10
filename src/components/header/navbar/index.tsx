import {useState} from "react";
import style from "./navbar.module.scss";
import LinkButton from "../../../common/uiToolkit/LinkButton";


const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);


    const toggleMenu = () => {
        setIsOpened(!isOpened);
    };

    const navLinkClickHandler = () => {
        setIsOpened(false);
    };

    const navbarClassName = isOpened ? `${style.navbar} ${style.opened}` : style.navbar;

    return (
        <>
            <button className={style.menuToggle} onClick={toggleMenu}>
                <span/>
                <span/>
                <span/>
            </button>
            <nav className={navbarClassName}>
                <LinkButton onClick={navLinkClickHandler} className={style.navLink} url={"#home"}
                            variant={"outlined"}>Home</LinkButton>
                <LinkButton onClick={navLinkClickHandler} className={style.navLink} url={"#skills"}
                            variant={"outlined"}>Skills</LinkButton>
                <LinkButton onClick={navLinkClickHandler} className={style.navLink} url={"#portfolio"}
                            variant={"outlined"}>Projects</LinkButton>
                <LinkButton onClick={navLinkClickHandler} className={style.navLink} url={"#contacts"}
                            variant={"outlined"}>Contacts</LinkButton>

            </nav>
        </>
    );
};

export default Navbar
