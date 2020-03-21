import release from './modules/release'
import helloTest from './modules/demo'

console.log(release,helloTest,'release')
export default {
    ...release,
    ...helloTest
}