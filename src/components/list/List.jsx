import React from 'react'
import Userinfo from './userInfo/Userinfo'
import Chatlist from './chatList/Chatlist'

export default function List() {
  return (
    <div className='flex-1/4'>
      <Userinfo/>
      <Chatlist/>
    </div>
  )
}
