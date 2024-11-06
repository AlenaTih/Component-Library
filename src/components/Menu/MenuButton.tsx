import { useContext } from "react"
import Button from "../Button/Button.tsx"
import { MenuContext } from "./Menu.tsx"

interface MenuButtonProps {
    children: React.ReactNode;
}

function MenuButton({ children }: MenuButtonProps) {
    const context = useContext(MenuContext)

    if (!context) {
        throw new Error("MenuButton should be used within a Menu")
    }

    const { toggleOpen } = context

    return (
        <Button
            className="menu-button"
            onClick={toggleOpen}>
            {children}
        </Button>
    )
}

export default MenuButton
