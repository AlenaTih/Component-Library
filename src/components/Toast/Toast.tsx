import { useState, useEffect } from "react"
import {
    BsCheckCircle,
    BsExclamationTriangle,
    BsXCircle,
    BsInfoCircle,
    BsX
} from "react-icons/bs"

function Toast({
    status,
    text,
    duration = 4000, // Time in ms for auto-dismiss
    onClose, // Callback to remove the toast
    // children,
}: {
    status: "Success" | "Warning" | "Error" | "Information",
    text: string,
    duration?: number,
    onClose?: () => void,
    // children: React.ReactNode
}) {
    const [isVisible, setIsVisible] = useState(false)

    let titleColor
    let textColor
    let backgroundColor
    let icon
    let className

    // Title, text, background color, icon, and className based on the status
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

    // Auto-dismiss the toast after a specified duration
    useEffect(() => {
        setIsVisible(true) // Trigger the enter transition

        const timer = setTimeout(() => {
            setIsVisible(false) // Trigger the exit transition
            setTimeout(() => {
                if (onClose) onClose() // Close after transition ends
            }, 1000) // Match transition duration (1s)
        }, duration)

        // Clean up the timer if the component is unmounted
        return () => clearTimeout(timer)
    }, [duration, onClose])

    return (
        <div
            className={`toast ${className} ${isVisible ? "toast-enter" : "toast-exit"}`}
            style={toastStyle}>
            <div className="toast-icon-container">
                <span className="toast-icon">{icon}</span>
            </div>
            <div className="toast-text-container">
                <h4 className="toast-title" style={statusStyle}>{status}</h4>
                <p className="toast-text" style={textStyle}>{text}</p>
            </div>
            <div className="toast-close-button-container">
                <button
                    className="close-toast-button"
                    onClick={() => {
                        if (onClose) onClose()
                        setIsVisible(false)
                    }}
                >
                    <BsX />
                </button>
            </div>
        </div>
    )
}

export default Toast
