import Menu from "./Menu.tsx"
import MenuButton from "./MenuButton.tsx"
import MenuDropdown from "./MenuDropdown.tsx"
import MenuItem from "./MenuItem.tsx"

// Menu.Button = MenuButton
// Menu.Dropdown = MenuDropdown
// Menu.Item = MenuItem

const MenuNameSpace = {
    Menu,
    Button: MenuButton,
    Dropdown: MenuDropdown,
    Item: MenuItem,
}

// export default Menu

export default MenuNameSpace
