import UploadPage from "./components/UploadPage.tsx"
import Button from "./components/Button/Button.tsx"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <h1>Building App</h1>
      <UploadPage />
      <Button>Upload</Button>
    </div>
  )
}

export default App
