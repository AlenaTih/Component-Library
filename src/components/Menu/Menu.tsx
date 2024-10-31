import { createContext, ReactNode } from "react"
import useToggle from "../../hooks/useToggle.tsx"

interface MenuContextValue {
    open: boolean;
    toggleOpen: () => void;
  }

const MenuContext = createContext<MenuContextValue | null>(null)
export { MenuContext }

interface MenuProps {
    children: ReactNode;
    onOpen?: (open: boolean) => void;
}

function Menu({ children, onOpen }: MenuProps) {
    const [open, toggleOpen] = useToggle({
        initialValue: true, 
        onToggle: onOpen
    }) as [boolean, () => void]

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export default Menu
