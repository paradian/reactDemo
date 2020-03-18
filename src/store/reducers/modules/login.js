// import login from ''
import pages from '../../pages'
const login = (state='',action) => {
    switch(action.type){
        case 'set-token':
            sessionStorage.setItem('token',state)
        this.filterRoute()
            return state;
    }
}

const filterRoute = (state =[]) =>{
    return pages.filter(cell => cell.premission == 'admin')
}