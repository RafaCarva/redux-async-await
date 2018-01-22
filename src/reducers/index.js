import {combineReducers} from 'redux'
//reduers
import ReducerSemThunk from './reducerSemThunk'

//combinar os reducers
const allReducers = combineReducers({
  ReducerSemThunk,
})

export default allReducers;