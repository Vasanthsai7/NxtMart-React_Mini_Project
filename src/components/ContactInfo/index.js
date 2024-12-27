import {CiTwitter} from 'react-icons/ci'
import {FaInstagram} from 'react-icons/fa'

import './index.css'

const ContactInfo = () => (
  <>
    <div className="contactContainer">
      <p className="conatctinfo">
        For any queries, contact +91-9876543210 or mail us help@nxtmart.co.in
      </p>
      <div className="social-media">
        <img
          className="socialmedia-logo"
          src="https://res.cloudinary.com/duajungih/image/upload/v1734593750/facebook_z57jeu.png"
          alt="img1"
        />
        <img
          className="socialmedia-logo"
          src="https://res.cloudinary.com/duajungih/image/upload/v1734594471/pinstrest_itwa3y.png"
          alt="img2"
        />
        <CiTwitter className="twitter" />
        <FaInstagram className="twitter" />
      </div>
      <p>Copyright © 2023 NxtMart Grocery Supplies Pvt Ltd</p>
    </div>
  </>
)

export default ContactInfo
