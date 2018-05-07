import { handleActions, createAction } from 'redux-actions'

// Types
const INCREMENT = 'INCREMENT'

const DECREMENT = 'DECREMENT'

const ASYNC_INCREMENT = 'ASYNC_INCREMENT'

// Reducers
const initial = {
  num: 0,
  asyncNum: 0
}
export default handleActions({
  [INCREMENT] (state, action) {
    console.log('hehe')
    return {
      ...state,
      num: state.num + action.num
    }
  },
  [DECREMENT] (state, action) {
    return {
      ...state,
      num: state.num - action.num
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, initial)

// Actions
export const asyncInc = createAction(ASYNC_INCREMENT, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})

export function incNum() {
  console.log('自增')
  return {
    type: INCREMENT,
    num: 2
  }
}

export function decNum() {
  console.log('自减')
  return {
    type: DECREMENT,
    num: 2
  }
}
