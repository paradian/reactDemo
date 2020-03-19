import counter from './modules/counter'
import list from './modules/list'
import login from './modules/login'
import userLevel from './modules/userLevel'
export default {
  ...counter,
  ...list,
  ...login,
  ...userLevel
}