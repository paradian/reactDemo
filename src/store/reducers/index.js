import {combineReducers} from 'redux'
import counter from './counter'
import list from './list'
console.log(counter,'counter')
export default combineReducers({
    ...counter,
    ...list
})