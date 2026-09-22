import type { AnchorHTMLAttributes } from "react";
import type { ButtonVariant } from '../../types';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
    fullWidth?: boolean;
}

const Button = ({
    variant = 'solid',
    fullWidth = false,
    className = '',
    children,
    ...rest
}: ButtonProps) => {
    const classes = [
        'btn-frost',
        variant === 'outline' ? 'btn-outline' : '',
        fullWidth ? 'btn-full' : '',
        className,
    ]
    .filter(Boolean)
    .join(' ');

    return (
        <a className={classes} {...rest}>
            {children}
        </a>
    );
};

export default Button;