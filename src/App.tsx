import { useState} from "react"
import { createPortal } from "react-dom"
import Button from "./components/Button/Button.tsx"
import Star from "./components/Star.tsx"
import MenuNameSpace from "./components/Menu/MenuNameSpace.tsx"
import Badge from "./components/Badge/Badge.tsx"
import Banner from "./components/Banner/Banner.tsx"
import { BsCloudUploadFill } from "react-icons/bs"
import Card from "./components/Card/Card.tsx"
import TestimonialWithImage from "./components/Testimonial/TestimonialWithImage.tsx"
import MayAndersons from "./assets/may-andersons.png"
import WorkcationLogo from "./assets/workcation-logo.png"
import TestimonialWithoutImage from "./components/Testimonial/TestimonialWithoutImage.tsx"
import Tooltip from "./components/Tooltip/Tooltip.tsx"
import Toast from "./components/Toast/Toast.tsx"
import "./App.css"

function App() {
  const [isSuccessToastShown, setIsSuccessToastShown] = useState(false)
  const [isWarningToastShown, setIsWarningToastShown] = useState(false)
  const [isErrorToastShown, setIsErrorToastShown] = useState(false)
  const [isInfoToastShown, setIsInfoToastShown] = useState(false)
  const [isButtonToastShown, setIsButtonToastShown] = useState(false)

  function showToasts() {
    setIsSuccessToastShown(true)
    setIsWarningToastShown(true)
    setIsErrorToastShown(true)
    setIsInfoToastShown(true)
  }

  function showButtonToast() {
    setIsButtonToastShown(true)
  }
  
  return (
    <div className="app-container">
      <h1 className="app-title">React Components</h1>

      <div className="button-star-component-container">
        <div className="component-container">
          <h2 className="component-title">Button</h2>
          <Button
            className="do-this-button"
            onClick={showButtonToast}
          >
            Click
          </Button>
        </div>

        <div className="component-container">
            <h2 className="component-title">Star</h2>
              <Star />
        </div>
      </div>

      <div className="menu-badge-component-container">
        <div className="component-container">
          <h2 className="component-title">Menu</h2>
          <MenuNameSpace.Menu>
            <MenuNameSpace.Button>
              Toggle menu
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

        <div className="component-container">
          <h2 className="component-title">Badge</h2>
          <div className="badge-container">
            <Badge color="yellow" shape="square">
              Badge
            </Badge>

            <Badge color="gray" shape="pill">
              Badge
            </Badge>

            <Badge color="red" shape="square">
              Badge
            </Badge>

            <Badge color="blue" shape="pill">
              Badge
            </Badge>

            <Badge color="green" shape="square">
              Badge
            </Badge>

            <Badge color="indigo" shape="pill">
              Badge
            </Badge>

            <Badge color="purple" shape="square">
              Badge
            </Badge>

            <Badge color="pink" shape="pill">
              Badge
            </Badge>
          </div>
        </div>
      </div>

      <div className="component-container">
        <h2 className="component-title">Banner</h2>
        <div className="banner-container">
          <Banner
            title="Congratulations!"
            text="This is awesome."
            status="success"
          />

          <Banner
            title="Attention"
            text="Please focus."
            status="warning"
          />

          <Banner
            title="There is a problem with your application"
            text="Please fix it."
            status="error"
          />

          <Banner
            title="Update available"
            text="You can update your application."
            status="neutral"
          />

          <Banner
            title="New information"
            status="neutral"
          />
        </div>
      </div>

      <div className="component-container">
        <h2 className="component-title">Card</h2>
        <div className="card-container">
          <Card
            title="Easy Deployment"
            text="Deploy your app efficiently in a few clicks."
            iconColor="#1E40AF"
          />

          <Card
            title="Efficient Deployment"
            text="Deploy your app efficiently in a few clicks."
            icon={<BsCloudUploadFill className="card-icon" />}
          />
        </div>
      </div>

      <div className="component-container">
        <h2 className="component-title">Testimonial</h2>
        <div className="testimonial-container">
          <TestimonialWithImage
            image={MayAndersons}
            text="This is an awesome app."
            name="May Andersons"
            company="Workcation"
            title="CTO"
          />

          <TestimonialWithoutImage
            companyLogo={WorkcationLogo}
            text="This is an awesome app."
            name="May Andersons"
            company="Workcation"
            title="CTO"
          />
        </div>
      </div>

      <div className="tooltip-toast-component-container">
        <div className="component-container">
          <h2 className="component-title">Tooltip</h2>
          <div className="tooltip-container">
            <Tooltip
              title="Archive notes"
              text="Click to archive your note."
              color="gray"
              mode="dark"
            />

            <Tooltip
              title="Archive notes"
              text="Click to archive your note."
              color="blue"
              mode="dark"
            />

            <Tooltip
              title="Archive notes"
              text="Click to archive your note."
              color="pink"
              mode="dark"
            />

            <Tooltip
              title="Archive notes"
              text="Click to archive your note."
              color="green"
              mode="dark"
            />

            <Tooltip
              title="Archive notes"
              text="Click to archive your note."
              color="gray"
              mode="light"
            />

            <Tooltip
              title="Archive notes"
              text="Click to archive your note."
              color="blue"
              mode="light"
            />

            <Tooltip
              title="Archive notes"
              text="Click to archive your note."
              color="pink"
              mode="light"
            />

            <Tooltip
              title="Archive notes"
              text="Click to archive your note."
              color="green"
              mode="light"
            />
          </div>
        </div>

        <div className="component-container">
          <h2 className="component-title">Toast</h2>
          <div className="toast-container">
            {isSuccessToastShown && createPortal(
              <Toast
                status="Success"
                text="Your work has been saved"
                onClose={() => setIsSuccessToastShown(false)}
              />,
              document.body
            )}

            {isWarningToastShown && createPortal(
              <Toast
                status="Warning"
                text="A network error was detected"
                onClose={() => setIsWarningToastShown(false)}
              />,
              document.body
            )}

            {isErrorToastShown && createPortal(
              <Toast
                status="Error"
                text="Please re-save your work again"
                onClose={() => setIsErrorToastShown(false)}
              />,
              document.body
            )}

            {isInfoToastShown && createPortal(
              <Toast
                status="Information"
                text="Please read updated information"
                onClose={() => setIsInfoToastShown(false)}
              />,
              document.body
            )}

            {isButtonToastShown && createPortal(
              <Toast
                status="Success"
                text="Button clicked"
                onClose={() => setIsButtonToastShown(false)}
              />,
              document.body
            )}

            <button
              className="show-toast-button"
              onClick={showToasts}
              aria-label="Show toasts"
              disabled={
                isSuccessToastShown || isWarningToastShown ||
                isErrorToastShown || isInfoToastShown
              }
            >
                Show toasts
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
