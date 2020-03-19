import {combineReducers} from 'redux'
import counter from './modules/counter'
import list from './modules/list'
import userLevel from './modules/userLevel'
import login from './modules/login'
console.log(counter,'counter')
export default combineReducers({
    ...counter,
    ...list,
    ...userLevel,
    ...login
})