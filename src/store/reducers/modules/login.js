// import login from ''
// import pages from '../../pages'
// import routes from '../../routes/config'
import actions from '../../actions/index'
const login = (state='',action) => {
    switch(action.type){
        case 'set-token':
            console.log(state,action,'state')
            sessionStorage.setItem('token',action.data)
            console.log(state,'this')
            // this.props.history.push({
            //     pathname:'/home'
            // })
        // this.filterRoute()
            return action.data;
            default :
            return 2;
    }
}

export default {
    login
}