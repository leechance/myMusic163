import { combineReducers } from 'redux'

import todoReducer from './todoList'
import seach from './search'
import player from './player'
import songDetail from './songDetail'
import maskWrap from './maskWrap'
var reducer = combineReducers({
  ...player,
  ...todoReducer,
  ...seach,
  ...songDetail,
  ...maskWrap,
})
export default reducer;