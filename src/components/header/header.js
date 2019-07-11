import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ButtonHome from '../buttons/button-home'
import './header.sass'

const Header = ({ ...props }) => (
  <header className="Header">
    <div className="Flex__bar">
      {
        props.location.pathname === '/'
        ? <>
          <span className="Logo">
            In2Touch Unofficial
          </span>
          <Link to="/settings">
            <span className="material-icons Text--medium">
              settings
            </span>
          </Link>
        </>
        : <ButtonHome />
      }
    </div>
  </header>
)

export default withRouter(Header)
