import fetch from './fetch'

const getList = ()=>{
    return fetch('topics','GET','')
}


export default {
    getList,
}