import React, { Component } from 'react'
import { LoginArea } from './LoginArea'

export class HeaderNav extends Component {
  render() {
    const { auth, handleTelegramResponse } = this.props
    const logo = require('../logo.png')
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="#">
              <img src={logo} />
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <LoginArea auth={auth} handleTelegramResponse={handleTelegramResponse} />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
