import { combineReducers } from 'redux'
import fetchCatReducer from './fetchCatReducer'

export default combineReducers({
    cats: fetchCatReducer
})