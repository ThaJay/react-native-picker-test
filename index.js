import React, {Component} from 'react'
import {AppRegistry}      from 'react-native'
import {Provider}         from 'react-redux'
import store from './redux.js'

// import Root from './leftright.js'

import App from './app.js'

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('pickertest', () => Root)
