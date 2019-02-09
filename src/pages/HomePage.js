import React, { Component } from 'react';
import firebase from '../firebase.js';
import { StickerItem } from '../components/StickerItem.js';

export class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      stickers: []
    }
  }

  componentDidMount() {
    const itemsCol = firebase.firestore().collection('stickers')
    itemsCol.onSnapshot((snapshot) => {
      let newState = []

      snapshot.forEach(doc => {
        let data = doc.data()

        data.user = data.user.get().then(userDoc => {
          return userDoc.data()
        })

        newState.push(data)
      })

      this.setState({
        stickers: newState
      })
    })
  }

  render() {
    return (
      <div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5">
                <strong>{this.state.stickers.length}</strong> stickers
              </p>
            </div>
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <input className="input" type="text" placeholder="Find stickers" />
                </p>
                <p className="control">
                  <button className="button">
                    Search
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="level-right">
            <p className="level-item"><strong>All</strong></p>
            <p className="level-item"><a>Published</a></p>
            <p className="level-item"><a>Recent</a></p>
            <p className="level-item"><a className="button is-success">New</a></p>
          </div>
        </nav>

        <div className="columns">
          {
            this.state.stickers.map((sticker, index) =>
              <StickerItem
                sticker={sticker}
                key={index}
              />
            )
          }
        </div>
      </div>
    )
  }
}
