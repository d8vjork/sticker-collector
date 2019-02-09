import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { HeaderNav } from './components/HeaderNav';
import { HomePage } from './pages/HomePage';

class App extends Component {
  constructor() {
    super()

    this.state = {
      auth: JSON.parse(localStorage.getItem('tg_auth'))
    }
  }

  handleTelegramResponse = (response) => {
    localStorage.clear()
    localStorage.setItem('tg_auth', JSON.stringify(response))
    this.setState({auth: response})
  }

  render() {
    return (
      <Router>
        <div>
          <section className="hero is-primary is-medium">
            <div className="hero-head">
              <HeaderNav auth={this.state.auth} handleTelegramResponse={this.handleTelegramResponse} />
            </div>

            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Sticker Collector
                </h1>
                <h2 className="subtitle">
                  Welcome to the Telegram stickers marketplace
                </h2>
              </div>
            </div>

            <div className="hero-foot">
              <nav className="tabs is-boxed">
                <div className="container">
                  <ul>
                    <li className="is-active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/tops">Tops</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <Route path="/" component={HomePage} />
            </div>
          </section>
        </div>
      </Router>
    )
  }
}

export default App;
