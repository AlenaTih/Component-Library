import { BsCloudArrowUpFill } from "react-icons/bs"

function Card({
    title,
    text,
    icon = <BsCloudArrowUpFill className="card-icon" />,
    iconColor = "cornflowerblue",
    // children,
}: {
    title: string,
    text: string,
    icon?: React.ReactNode,
    iconColor?: string,
    // children: React.ReactNode,
}) {
    const iconStyle = {
        color: iconColor,
    }

    return (
        <div className="card">
            <span
                className="card-icon"
                style={iconStyle}>
                {icon}
            </span>
            <h4>{title}</h4>
            <p>{text}</p>
            {/* {children} */}
        </div>
    )
}

export default Card
