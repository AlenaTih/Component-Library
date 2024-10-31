import UploadPage from "./components/UploadPage.tsx"
import Button from "./components/Button/Button.tsx"
import Star from "./components/Star.tsx"
import MenuNameSpace from "./components/Menu/MenuNameSpace.tsx"
import "./App.css"

function App() {
  const handleMenuToggle = (open: boolean) => {
    console.log(`Menu is ${open ? "open" : "closed"}`)
}
  
  return (
    <div className="app-container">
      <h1>Upload page</h1>
      <UploadPage />

      <h2>Button component</h2>
      <Button>Upload</Button>

      <h2>Star conponent</h2>
      <Star onChange={(on: boolean) => {
        console.log(`Star is ${on ? "on" : "off"}`)
        }} />

      <h2>Menu component</h2>
      <MenuNameSpace.Menu onOpen={handleMenuToggle}>
        <MenuNameSpace.Button>
          Toggle Menu
        </MenuNameSpace.Button>
                
        <MenuNameSpace.Dropdown>
          <MenuNameSpace.Item>
            Item 1
          </MenuNameSpace.Item>
          <MenuNameSpace.Item>
            Item 2
          </MenuNameSpace.Item>
          <MenuNameSpace.Item>
            Item 3
          </MenuNameSpace.Item>
          <MenuNameSpace.Item>
            Item 4
          </MenuNameSpace.Item>
        </MenuNameSpace.Dropdown>
      </MenuNameSpace.Menu>
    </div>
  )
}

export default App
