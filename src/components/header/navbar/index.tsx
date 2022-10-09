import {useState} from "react";
import style from "./navbar.module.scss";




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
     {/*       <button className={style.menuToggle} onClick={toggleMenu}>
                <span/>
                <span/>
                <span/>
            </button>
            <nav className={navbarClassName}>
                <Link
                    className={style.navLink}
                    activeClass={style.active}
                    to={"home"}
                    spy={true}
                    smooth={true}
                    offset={-78}
                    duration={500}
                    onClick={navLinkClickHandler}
                >
                    Home
                </Link>
                <Link
                    className={style.navLink}
                    activeClass={style.active}
                    to={"skills"}
                    spy={true}
                    smooth={true}
                    offset={-78}
                    duration={500}
                    onClick={navLinkClickHandler}
                >
                    Skills
                </Link>
                <Link
                    className={style.navLink}
                    activeClass={style.active}
                    to={"portfolio"}
                    spy={true}
                    smooth={true}
                    offset={-78}
                    duration={500}
                    onClick={navLinkClickHandler}
                >
                    Portfolio
                </Link>
                <Link
                    className={style.navLink}
                    activeClass={style.active}
                    to={"contacts"}
                    spy={true}
                    smooth={true}
                    offset={-78}
                    duration={500}
                    onClick={navLinkClickHandler}
                >
                    Contacts
                </Link>
            </nav>*/}
        </>
    );
};

export default Navbar
