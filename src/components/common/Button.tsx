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
    const base = 'font-pixel text-[9px] py-2.5 px-4 border-2 border-ice-navy cursor-pointer no-underline inline-flex items-center gap-2 transition-all duration-150';

    const solidStyles = 'bg-ice-primary text-white shadow-[3px_3px_0_var(--color-ice-navy)] hover:bg-ice-navy hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_var(--color-ice-frost)]';
    const outlineStyles = 'bg-ice-card text-ice-navy shadow-[3px_3px_0_var(--color-ice-navy)] hover:bg-ice-frost hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_var(--color-ice-frost)]';

    const disabledStyles = 'brightness-80 cursor-not-allowed !translate-0 !shadow-[3px_3px_0_var(--color-ice-navy)]';
    const disabledSolidBg = '!bg-ice-primary';
    const disabledOutlineBg = '!bg-ice-card';

    const fullWidthStyles = 'flex-1 justify-center text-[8px]';

    const classes = [
        base,
        variant === 'outline' ? outlineStyles : solidStyles,
        disabled ? `${disabledStyles} ${variant === 'outline' ? disabledOutlineBg : disabledSolidBg}` : '',
        fullWidth ? fullWidthStyles : '',
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