import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ButtonBack from '../buttons/button-back'
import ButtonHome from '../buttons/button-home'
import './header.sass'

const Header = ({ ...props }) => (
  <header className="Header">
    <div className="Flex__bar">
      {
        props.location.pathname === '/'
        ? <>
          <span className="Header__logo">
            In2Touch Unofficial
          </span>
          <Link to="/settings">
            <span className="material-icons Text--medium">
              settings
            </span>
          </Link>
        </>
        : <>
          <ButtonHome />
          <ButtonBack />
        </>
      }
    </div>
  </header>
)

export default withRouter(Header)
