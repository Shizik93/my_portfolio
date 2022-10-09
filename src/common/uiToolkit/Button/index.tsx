import style from "../../styles/sass/styles.module.scss";
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

const Button = (
    {onClick, color = "primary", variant = "default", children, ...props}: ButtonPropsType
) => {
    const finalClassName = `${style.button} ${style[color]} ${style[variant]}`;

    return (
        <button
            className={finalClassName}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button

type ButtonPropsType = {
    color?: string
    variant?: string

} & DefaultButtonPropsType
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
