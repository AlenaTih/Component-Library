import { useContext } from "react"
import { MenuContext } from "./Menu.tsx"

interface MenuDropdownProps {
    children: React.ReactNode;
}

function MenuDropdown({ children }: MenuDropdownProps) {
    const context = useContext(MenuContext)

    if(!context) {
        throw new Error("MenuDropdown should be used within a Menu")
    }

    const { open } = context

    return (
        <>
            {open ? (
                <div className="menu-dropdown">
                    {children}
                </div>
            ) : null
            }
        </>
    )
}

export default MenuDropdown
