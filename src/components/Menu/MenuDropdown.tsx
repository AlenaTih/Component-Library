import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }: { children: React.ReactNode }) {
    const { open } = useContext(MenuContext)

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
