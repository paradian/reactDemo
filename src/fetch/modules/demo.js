import fetch from '../fetch'

const helloTest = ()=>{
    return fetch('/hello','GET','')
}

export default {
    helloTest
}