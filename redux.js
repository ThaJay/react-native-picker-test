import {createStore} from 'redux'

const initialState = {value:''}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return {...state, value:action.value}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
