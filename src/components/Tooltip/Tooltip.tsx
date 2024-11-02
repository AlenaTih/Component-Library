import { BsBookmark } from "react-icons/bs"
import { BsX } from "react-icons/bs"

function Tooltip({
    title,
    text,
    color,
    // children,
}: {
    title: string,
    text: string,
    color: string,
    // children: React.ReactNode,
}) {
    let textColor
    let backgroundColor

    if (color === "blue") {
        textColor = "whitesmoke"
        backgroundColor = "#1E40AF"
    }

    const style = {
        color: textColor,
        backgroundColor: backgroundColor,
    }

    return (
        <div className="tooltip" style={style}>
            <span
                className="tooltip-icon">
                <BsBookmark />
                </span>
            <h4>{title}</h4>
            <p>{text}</p>
            {/* {children} */}
            <span className="close-tooltip-icon">
                <BsX />
            </span>
        </div>
    )
}

export default Tooltip
