import classnames from "classnames"

export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "tertiary";
}

function Button({
    children,
    className,
    size,
    variant,
    ...rest
}: ButtonProps) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classnames(sizeClass, variantClass, className)

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}

export default Button
