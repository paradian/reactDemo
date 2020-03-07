import fetch from '../fetch'

const getList = ()=>{
    return fetch('topics','GET','')
}
console.log(getList,'getList')
export default {
    getList
}