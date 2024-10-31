import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../hooks/useToggle.tsx"

export default function Star({
    onChange
}: { onChange: (state: boolean) => void }) {
    const [on, toggle] = useToggle({
        initialValue: false, 
        onToggle: onChange
    })

    return (
        <div>
            {
                on ?
                    <BsStarFill onClick={toggle} className="star filled" /> :
                    <BsStar onClick={toggle} className="star" />
            }
        </div>
    )
}
