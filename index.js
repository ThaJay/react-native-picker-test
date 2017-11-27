import React, { Component } from 'react'
import {AppRegistry, Picker} from 'react-native'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {value:''}
  }

  onValueChange = value => {
    this.setState({value})
    console.log(value, this.state.value)
  }

  values = [
    'first value',
    'second value',
    'third value',
    'fourth value'
  ]

  makeNodes = function * () {
    for (let i in this.values) {
      yield (
        <Picker.Item
          label={this.values[i]}
          key={i}
          value={i}
        />
      )
    }
  }

  render () {
    return (
      <Picker
        selectedValue={this.state.value}
        onValueChange={this.onValueChange}
        mode='dropdown'
      >
        {[...this.makeNodes()]}
      </Picker>
    )
  }
}

AppRegistry.registerComponent('pickertest', () => App)
