import UploadPage from "./components/UploadPage.tsx"
import Button from "./components/Button/Button.tsx"
import Star from "./components/Star.tsx"
import MenuNameSpace from "./components/Menu/MenuNameSpace.tsx"
import Badge from "./components/Badge/Badge.tsx"
import Banner from "./components/Banner/Banner.tsx"
import { BsCloudUploadFill } from "react-icons/bs"
import Card from "./components/Card/Card.tsx"
import TestimonialWithImage from "./components/Testimonial/TestimonialWithImage.tsx"
import MayAndersons from "./assets/may-andersons.png"
import TestimonialWithoutImage from "./components/Testimonial/TestimonialWithoutImage.tsx"
import Tooltip from "./components/Tooltip/Tooltip.tsx"
import "./App.css"

function App() {
  const handleMenuToggle = (open: boolean) => {
    console.log(`Menu is ${open ? "open" : "closed"}`)
}
  
  return (
    <div className="app-container">
      <h1>React components</h1>

      <h2 className="component-title">Upload page</h2>
      <UploadPage />

      <h2 className="component-title">Button</h2>
      <Button>Click</Button>

      <h2 className="component-title">Star</h2>
      <Star onChange={(on: boolean) => {
        console.log(`Star is ${on ? "on" : "off"}`)
        }} />

      <h2 className="component-title">Menu</h2>
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

      <h2 className="component-title">Badge</h2>
      <div className="badge-container">
        <Badge color="yellow" shape="square">
          Badge
        </Badge>

        <Badge color="blue" shape="pill">
          Badge
        </Badge>
      </div>

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
          text="Please fex it."
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

        {/* <Banner
          title="Congratulations!"
          text="This is awesome."
          status="success">
          Banner Success
        </Banner>

        <Banner
          title="Attention"
          text="Please focus."
          status="warning">
          Banner Warning
        </Banner>

        <Banner
          title="There is a problem with your application"
          text="Please fex it."
          status="error">
          Banner Error
        </Banner>

        <Banner
          title="Update available"
          text="You can update your application."
          status="neutral">
          Banner Neutral
        </Banner> */}

      </div>

      <h2 className="component-title">Card</h2>
      <div className="card-container">
        <Card
          title="Easy Deployment"
          text="Deploy your app efficiently in a few clicks."
        />

        <Card
          title="Efficient Deployment"
          text="Deploy your app efficiently in a few clicks."
          icon={<BsCloudUploadFill className="card-icon" />}
        />
      </div>

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
          companyLogo={MayAndersons}
          text="This is an awesome app."
          name="May Andersons"
          company="Workcation"
          title="CTO"
        />
      </div>

      <h2 className="component-title">Tooltip</h2>
      <div className="tooltip-container">
        <Tooltip
          title="Archive notes"
          text="Click to archive your note."
          color="blue"
        />
      </div>

    </div>
  )
}

export default App
