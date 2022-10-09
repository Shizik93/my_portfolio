import style from './header.module.scss'
import Navbar from "./navbar";
const Header = () => {
    return (

        <header id={"header"} className={style.header}>
            <div className={style.container}>
                <Navbar/>
            </div>
        </header>

    )
}

export default Header
