import counter from './counter'
import list from './list'
console.log(counter)
export default {
  ...counter,
  ...list
}
