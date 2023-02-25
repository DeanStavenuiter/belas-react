import NavBar from "../nav-bar/NavBar"
import AddressBar from "../address-bar/AddressBar"
import HomeInner from "../home-inner/HomeInner"

const HomePage = () => {

  return (
    <div style={{display: 'grid'}}>
        <AddressBar/>
        <NavBar/>
        <HomeInner/>
    </div>
  )
}

export default HomePage