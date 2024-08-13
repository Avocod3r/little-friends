import React, {ButtonHTMLAttributes, FC} from 'react';

export enum ButtonAppearance {
    PRIMARY= 'primary',
    SECONDARY = 'secondary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearance?: ButtonAppearance;
}

const Button:FC<ButtonProps> = ({type = 'button',className, appearance = ButtonAppearance.PRIMARY, children, ...props}) => {
    return (
            <button type={type} className={`button ${appearance} ${className}`} {...props}>
                {children}
            </button>
    );
};

export default Button;