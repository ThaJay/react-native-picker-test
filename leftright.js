import React, {Component} from 'react'
import {Picker, View} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {hand:'right'}
  }

  render () {
    return (
      <View>
        <Picker
          onValueChange={hand => {
            this.setState({hand})
            console.log('changed to', hand)
          }}
          selectedValue={this.state.hand}
          style={{width:160}}
          mode='dropdown'
        >
          <Picker.Item label='Right Hand' value='right' />
          <Picker.Item label='Left Hand' value='left' />
        </Picker>
      </View>
    )
  }
}
