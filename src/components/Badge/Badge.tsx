function Badge({
    color,
    children,
    shape,
}: {color: string, children: React.ReactNode, shape: string}) {
    let textColor
    let backgroundColor
    let borderRadius

    // Text color and background color
    if (color === "whitesmoke") {
        textColor = "gray"
        backgroundColor = "whitesmoke"
    }

    if (color === "cornflowerblue") {
        textColor = "whitesmoke"
        backgroundColor = "cornflowerblue"
    }

    // Border radius
    if (shape === "square") {
        borderRadius = "0.25rem"
    }

    if (shape === "pill") {
        borderRadius = "1rem"
    }

    const style = {
        color: textColor,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
    }

    return (
        <div className="badge" style={style}>
            {children}
        </div>
    )
}

export default Badge
