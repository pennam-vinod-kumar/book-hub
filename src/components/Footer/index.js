import {FaGoogle, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="contact-us-container">
    <div>
      <FaGoogle className="contact-us" />
      <FaTwitter className="contact-us" />
      <FaInstagram className="contact-us" />
      <FaYoutube className="contact-us" />
    </div>
    <p className="contact-us-heading">Contact Us</p>
  </div>
)

export default Footer
