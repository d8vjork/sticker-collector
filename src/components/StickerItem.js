import React, { Component } from 'react';
import Async from 'react-promise'

export class StickerItem extends Component {
  render() {
    const { sticker } = this.props
    return (
      <Async
        promise={sticker.user}
        then={user => {
          return(
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <a href={'https://telegram.me/' + user.username} target="_blank">
                          <img className="is-rounded" src={user.photo_url} alt={user.username + '\'s avatar'} />
                        </a>
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{sticker.name}</p>
                      <p className="subtitle is-6">{user.first_name}</p>
                    </div>
                  </div>
                </div>

                <footer className="card-footer">
                  <a href={sticker.uri} className="card-footer-item">Get</a>
                  <a href="#" className="card-footer-item">Edit</a>
                  <a href="#" className="card-footer-item">Delete</a>
                </footer>
              </div>
            </div>
          )
        }}
      />
    )
  }
}
