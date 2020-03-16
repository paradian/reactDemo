import {combineReducers} from 'redux'
import counter from './counter'
console.log(counter,'counter')
export default combineReducers({
    ...counter,
})