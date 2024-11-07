import { BsCheckCircleFill } from "react-icons/bs"
import { BsExclamationTriangleFill } from "react-icons/bs"
import { BsXCircleFill } from "react-icons/bs"
import { BsInfoCircleFill } from "react-icons/bs"

function Banner({
    // children,
    status,
    title,
    text,
}: {
    // children: React.ReactNode,
    status: "success" | "warning" | "error" | "neutral",
    title: string,
    text?: string
}) {
    let titleColor
    let textColor
    let backgroundColor
    let icon

    // Title, text, background color, and icon based on the status
    if (status === "success") {
        titleColor = "#065F46"
        textColor = "#047857"
        backgroundColor = "#ECFDF5"
        icon = <BsCheckCircleFill className="success-icon" />
    }

    if (status === "warning") {
        titleColor = "#92400E"
        textColor = "#B45309"
        backgroundColor = "#FFFBEB"
        icon = <BsExclamationTriangleFill className="warning-icon" />
    }

    if (status == "error") {
        titleColor = "#92400E"
        textColor = "#B45309"
        backgroundColor = "#FEF2F2"
        icon = <BsXCircleFill className="error-icon" />
    }

    if (status === "neutral") {
        titleColor = "#1E40AF"
        textColor = "#1C51B9"
        backgroundColor = "#EFF6FF"
        icon = <BsInfoCircleFill className="neutral-icon" />
    }

    const bannerStyle = {
        backgroundColor: backgroundColor,
    }

    const titleStyle = {
        color: titleColor,
    }

    const textStyle = {
        color: textColor,
    }

    return (
        <div className="banner" style={bannerStyle}>
            <div className="banner-icon-container">
                <span className="banner-icon">{icon}</span>
            </div>
            <div className="banner-text-container">
                <h4 className="banner-title" style={titleStyle}>{title}</h4>
                {text && (
                    <p className="banner-text" style={textStyle}>{text}</p>
                )}
            </div>
            {/* {children} */}
        </div>
    )
}

export default Banner
