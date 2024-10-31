interface MenuItemProps {
    children: React.ReactNode;
}

function MenuItem({ children }: MenuItemProps) {
    return (
        <div className="menu-item">
            {children}
        </div>
    )
}

export default MenuItem
