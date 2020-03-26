import api from '../../../fetch/api'
import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { render } from '@testing-library/react'

const list = (state = [], action) => {
  console.log(Route,'rouer')
  //
  switch (action.type) {
    
    case 'fetch-list':
      console.log(state)
     
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
