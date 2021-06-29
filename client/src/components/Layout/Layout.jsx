import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

//add props to layout 
const Layout = (props) => (
  <div className='layout'>

     {/* removed until need user={props.user}   */}
      <Nav />
    <div className="layout-children">
        {props.children}
      </div>
      <Footer />
  </div>
)

export default Layout