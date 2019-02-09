import React, { Component } from 'react'
import TelegramLoginButton from 'react-telegram-login';

export class LoginArea extends Component {

  render() {
    const { auth, handleTelegramResponse } = this.props
    if (auth && auth.photo_url) {
      return (
        <div className="navbar-item">
          <div className="buttons">
            <a href="#" className="button is-rounded is-primary is-inverted">
              <span className="icon">
                <figure className="image">
                  <img className="is-rounded" src={auth.photo_url}></img>
                </figure>
              </span>

              <span>{auth.first_name}</span>
              {/* <span>Add sticker</span> */}
            </a>
          </div>
        </div>
      )
    } else {
      return (
        <div className="navbar-item">
          <div className="buttons">
            <TelegramLoginButton dataOnauth={handleTelegramResponse} buttonSize="medium" botName="StickerCollectorBot" />
          </div>
        </div>
      )
    }
  }
}
