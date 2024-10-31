import { createContext } from "react"
import useToggle from "../../hooks/useToggle"

interface MenuContextValue {
    open: boolean;
    toggleOpen: () => void;
  }

const MenuContext = createContext<MenuContextValue | null>(null)
export { MenuContext }

// export interface MenuProps {
//     children: React.ReactNode;
//     onOpen?: (open: boolean) => void;
// }

export default function Menu({ children, onOpen }: any) {
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


