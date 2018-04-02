import { combineReducers } from 'redux'

import todoReducer from './todoList'
import seach from './search'

var reducer = combineReducers({
  ...todoReducer,
  ...seach,
})
export default reducer;