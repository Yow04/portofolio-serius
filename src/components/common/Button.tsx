import type { AnchorHTMLAttributes } from "react";
import type { ButtonVariant } from '../../types';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
    fullWidth?: boolean;
    disabled?: boolean;
}

const Button = ({
    variant = 'solid',
    fullWidth = false,
    disabled = false,
    className = '',
    children,
    href,
    target,
    rel,
    onClick,
    ...rest
}: ButtonProps) => {
    const classes = [
        'btn-frost',
        variant === 'outline' ? 'btn-outline' : '',
        fullWidth ? 'btn-full' : '',
        disabled ? 'btn-disabled': '',
        className,
    ]
    .filter(Boolean)
    .join(' ');

    const linkProps = disabled
        ? { 'aria-disabled': true, title: 'Tidak tersedia', tabIndex: -1 }
        : { href, target, rel, onClick };

    return (
        <a className={classes} {...linkProps} {...rest}>
            {children}
        </a>
    );
};

export default Button;