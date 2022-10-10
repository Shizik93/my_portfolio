import style from "./footer.module.scss";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer id={"footer"} className={style.footer}>
            <div className={style.container}>
                <p className={style.copyright}>
                    &copy; {year} Alexandr Kayuda. All rights reserved
                </p>
            </div>
        </footer>
    );
};
export default Footer
