import React, { Component }  from 'react'
import {AppRegistry, Picker} from 'react-native'
import {connect}             from 'react-redux'


function mapStateToProps (state) {
  return {
    value: state.value
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setValue: value => dispatch({type:'SET_VALUE', value})
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  onValueChange = value => {
    console.log(value, this.props.value)
    this.props.setValue(value)
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
        selectedValue={this.props.value}
        onValueChange={this.onValueChange}
        mode='dropdown'
      >
        {[...this.makeNodes()]}
      </Picker>
    )
  }
}
