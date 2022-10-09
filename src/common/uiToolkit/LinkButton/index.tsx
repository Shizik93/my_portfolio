import style from "../../styles/sass/styles.module.scss";
import {AnchorHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

const LinkButton = (
    {url, color = "primary", variant = "default", children, ...props}: LinkButtonPropsType
) => {
    const finalClassName = `${style.button} ${style[color]} ${style[variant]}`;

    return (
        <a href={url} className={finalClassName} {...props}>{children}</a>
    );
};

export default LinkButton

type LinkButtonPropsType = {
    url: string
    color?: string
    variant?: string
    children: ReactNode

} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
