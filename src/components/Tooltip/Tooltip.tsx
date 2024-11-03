import { BsBookmark } from "react-icons/bs"
import { BsX } from "react-icons/bs"

function Tooltip({
    title,
    text,
    color,
    mode,
    // children,
}: {
    title: string,
    text: string,
    color: "gray" | "blue" | "pink" | "green",
    mode: "light" | "dark",
    // children: React.ReactNode,
}) {
    let titleColor
    let textColor
    let backgroundColor
    let iconColor

    // Title, text, icon, and background color
    if (color === "gray" && mode === "dark") {
        titleColor = "whitesmoke"
        textColor = "#C7C7C7"
        backgroundColor = "#262626"
        iconColor = "#C7C7C7"
    }

    if (color === "blue" && mode === "dark") {
        titleColor = "whitesmoke"
        textColor = "#E8EDFF"
        backgroundColor = "#1E40AF"
        iconColor = "#D8D8D8"
    }

    if (color === "pink" && mode === "dark") {
        titleColor = "whitesmoke"
        textColor = "#FFE9FD"
        backgroundColor = "#A9229B"
        iconColor = "#D8D8D8"
    }

    if (color === "green" && mode === "dark") {
        titleColor = "whitesmoke"
        textColor = "#E3FFE9"
        backgroundColor = "#47AA5D"
        iconColor = "#D8D8D8"
    }

    if (color === "gray" && mode === "light") {
        titleColor = "#111827"
        textColor = "#6B7280"
        backgroundColor = "whitesmoke"
        iconColor = "#6B7280"
    }

    if (color === "blue" && mode === "light") {
        titleColor = "#1E40AF"
        textColor = "#1C51B9"
        backgroundColor = "#E0E7FF"
        iconColor = "#1C51B9"
    }

    if (color === "pink" && mode === "light") {
        titleColor = "#A9229B"
        textColor = "#C7369E"
        backgroundColor = "#FFF3FC"
        iconColor = "#C7369E"
    }

    if (color === "green" && mode === "light") {
        titleColor = "#137A2A"
        textColor = "#3C8C4E"
        backgroundColor = "#E7FFF3"
        iconColor = "#41A557"
    }

    const toolTipStyle = {
        backgroundColor: backgroundColor,
    }

    const titleStyle = {
        color: titleColor,
    }

    const textStyle = {
        color: textColor,
    }

    const iconStyle = {
        color: iconColor,
    }

    return (
        <div className="tooltip" style={toolTipStyle}>
            <span
                className="tooltip-icon">
                <BsBookmark style={iconStyle} />
                </span>
            <h4 style={titleStyle}>{title}</h4>
            <p style={textStyle}>{text}</p>
            {/* {children} */}
            <span className="close-tooltip-icon">
                <BsX style={iconStyle} />
            </span>
        </div>
    )
}

export default Tooltip
