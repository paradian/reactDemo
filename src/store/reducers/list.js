import api from '../../fetch/api'

const list = (state = [], action) => {
  switch (action.type) {
    case 'fetch-list':
      api.getList().then(res => {
        console.log(res)
        if (res.code == 200) {
          return res.data
        }
      })
    default:
      return []
  }
}
export default {
  list
}
