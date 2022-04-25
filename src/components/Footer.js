import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import {
  default as GitHubIcon,
  default as LinkedInIcon,
  default as YouTubeIcon,
} from "@mui/icons-material/YouTube"
import React from "react"
import { Link } from "react-router-dom"
import "./styles/Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='carts'>
        <ul className='cart-ul'>
          <li>
            <Link to='/'>Most Asked Questions</Link>
          </li>
          <li>
            <Link to='/'>What We Do ?</Link>
          </li>
          <li>
            <Link to='/'>History of Company</Link>
          </li>
          <li>
            <Link to='/'>Our Clients</Link>
          </li>
          <li>
            <Link to='/'>Market Place</Link>
          </li>
        </ul>

        <form className='form-2'>
          <label>Your Name</label>
          <input type='text' required />
          <label>Your Email</label>
          <input type='text' required />
          <label>Message</label>
          <textarea required></textarea>
          <button>send</button>
        </form>

        <div className='media'>
          <Link to='/'>
            <FacebookIcon />
          </Link>

          <Link to='/'>
            <InstagramIcon />
          </Link>

          <Link to='/'>
            <TwitterIcon />
          </Link>

          <Link to='/'>
            <YouTubeIcon />
          </Link>

          <Link to='/'>
            <LinkedInIcon />
          </Link>

          <Link to='/'>
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
