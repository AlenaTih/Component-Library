import { BsCloudArrowUpFill } from "react-icons/bs"

function Card({
    title,
    text,
    // children,
    icon = <BsCloudArrowUpFill className="card-icon" />,
}: {
    title: string,
    text: string,
    // children: React.ReactNode,
    icon?: React.ReactNode,
}) {
    return (
        <div className="card">
            <span>{icon}</span>
            <h4>{title}</h4>
            <p>{text}</p>
            {/* {children} */}
        </div>
    )
}

export default Card
