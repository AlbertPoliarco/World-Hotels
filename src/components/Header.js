import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "./Menu"
import "./styles/Header.scss"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const showMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className='header'>
      <nav className='nav-container'>
        <div className='menu'>
          <MenuOutlinedIcon className='menu-icon' onClick={showMenu} />
        </div>

        <div className='logo'>
          <h1>Etravel</h1>
        </div>

        <div className='right'>
          <ul>
            <li>
              <Link to='/places'>Places</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/signup'>Collections</Link>
            </li>
            <li>
              <Link to='/sponsors'>Sponsors</Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className={openMenu ? "slider active" : "slider"}>
        <ul onClick={showMenu} className='ul-menu'>
          {Menu.map((item, index) => {
            return (
              <div className='container'>
                <li className={item.className}>{item.text}</li>
                <p className='icon'>{item.icon}</p>
              </div>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Header
