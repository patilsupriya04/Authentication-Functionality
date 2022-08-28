// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about">
      <h1 className="header">About Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default About
