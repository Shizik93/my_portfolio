import style from "./modalBox.module.scss";
import {ReactNode} from "react";

const ModalBox = ({isShown, setIsShown, children}:ModalBoxPropsType) => {
    if (!isShown) {
        return <div></div>
    };

    return (
        <>
            <div className={style.modalBg}/>
            <div className={style.modalWrap} onClick={() => setIsShown(false)}>
                <div className={style.modalContainer}>
                    <div className={style.modalBox} onClick={(e) => e.stopPropagation()}>
                        {children}
                        <button className={style.buttonClose} onClick={() => setIsShown(false)}>×</button>
                    </div>
                </div>
            </div>
        </>
    );
};
type ModalBoxPropsType= {
    isShown:boolean
    setIsShown:(value:boolean)=>void
    children:ReactNode
}
export default ModalBox
