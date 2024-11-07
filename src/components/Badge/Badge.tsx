function Badge({
    color,
    children,
    shape,
}: {
    color: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink",
    children: React.ReactNode,
    shape: "square" | "pill",
}) {
    let textColor
    let backgroundColor
    let borderRadius

    // Text color and background color based on color
    if (color === "gray") {
        textColor = "#1F2937"
        // backgroundColor = "#F3F4F6"
        backgroundColor = "#D8D9DC"
    }

    if (color === "red") {
        textColor = "#991B1B"
        backgroundColor = "#FEE2E2"
    }

    if (color === "yellow") {
        textColor = "#92400E"
        backgroundColor = "#FEF3C7"
    }

    if (color === "green") {
        textColor = "#065F46"
        backgroundColor = "#D1FAE5"
    }

    if (color === "blue") {
        textColor = "#1E40AF"
        backgroundColor = "#DBEAFE"
    }

    if (color === "indigo") {
        textColor = "#3730A3"
        backgroundColor = "#E0E7FF"
    }

    if (color === "purple") {
        textColor = "#5B21B6"
        backgroundColor = "#EDE9FE"
    }

    if (color === "pink") {
        textColor = "#9D174D"
        backgroundColor = "#FCE7F3"
    }

    // Border radius based on shape
    if (shape === "square") {
        borderRadius = "0.25rem"
    }

    if (shape === "pill") {
        borderRadius = "0.75rem"
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
