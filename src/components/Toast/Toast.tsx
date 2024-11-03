import { BsCheckCircle } from "react-icons/bs"
import { BsExclamationTriangle } from "react-icons/bs"
import { BsXCircle } from "react-icons/bs"
import { BsInfoCircle } from "react-icons/bs"

function Toast({
    status,
    text,
    // children,
}: {
    status: "Success" | "Warning" | "Error" | "Information",
    text: string,
    // children: React.ReactNode
}) {
    let titleColor
    let textColor
    let backgroundColor
    let icon
    let className

    // Text color and background color based on the status
    if (status === "Success") {
        titleColor = "#065F46"
        textColor = "#047857"
        backgroundColor = "#ECFDF5"
        icon = <BsCheckCircle className="success-icon" />
        className="success"
    }

    if (status === "Warning") {
        titleColor = "#92400E"
        textColor = "#B45309"
        backgroundColor = "#FFFBEB"
        icon = <BsExclamationTriangle className="warning-icon" />
        className = "warning"
    }

    if (status == "Error") {
        titleColor = "#92400E"
        textColor = "#B45309"
        backgroundColor = "#FEF2F2"
        icon = <BsXCircle className="error-icon" />
        className = "error"
    }

    if (status === "Information") {
        titleColor = "#1E40AF"
        textColor = "#1C51B9"
        backgroundColor = "#EFF6FF"
        icon = <BsInfoCircle className="neutral-icon" />
        className = "information"
    }

    const toastStyle = {
        backgroundColor: backgroundColor,
    }

    const statusStyle = {
        color: titleColor
    }

    const textStyle = {
        color: textColor
    }

    return (
        <div className={`toast ${className}`} style={toastStyle}>
            <span className="toast-icon">{icon}</span>
            <h4 style={statusStyle}>{status}</h4>
            <p style={textStyle}>{text}</p>
        </div>
    )
}

export default Toast
