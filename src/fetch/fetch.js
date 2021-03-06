import axios from 'axios';

const baseUrl = 'https://cnodejs.org/api/v1/';
const instance = axios.create({

})
const  fetch =  (url ,method =method ||'GET',data=data||'') => {
    method = method.toUpperCase()
    if(method == 'GET') {
        let param = ''
        if(data != ''){
            for(let key in data) {
                param += '&'+key+'='+data[key]
            }
            url = baseUrl+url+'?'+param.substr(1)
        } else {
            url = baseUrl+url
        }
        
    } 
    return new Promise((resolve,reject) =>{
        axios({
                    method:method,
                    url:url,
                    data:data,
                    headers:{
                        'Access-Control-Allow-Origin':'*'
                    }
    }).then(res =>{
        resolve(res)
    })
})
    // try {
    //     const response =   axios({
    //         method:method,
    //         url:url,
    //         data:data,
    //         headers:{
    //             'Access-Control-Allow-Origin':'*'
    //         }
    //     }).then(res =>{
    //         return res
    //     }).catch(err => {
    //         console.error(err)
    //     })
    // } catch(err) {
    //     console.log(err,'error')
    // }
    }
export default fetch;