import { createStore } from 'redux'

const counterState = (state = { counter: 0 }, action) => {

  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  }
  else if (action.type === 'INCREMENTBY2') {
    return {
      counter: state.counter + 2
    }
  }
  else if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }
  else if (action.type === 'DECREMENTBY2') {
    return {
      counter: state.counter - 2
    }
  }
  return state;
}

const store = createStore(counterState)

export default store