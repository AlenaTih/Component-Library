import { useContext } from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

export default function MenuButton({ children }: { children: React.ReactNode }) {
    const { toggleOpen } = useContext(MenuContext)
    return (
        <Button onClick={toggleOpen}>{children}</Button>
    )
}
