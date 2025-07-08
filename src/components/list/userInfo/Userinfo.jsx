import { CircleUserRound, Menu, UserRoundPen, Video } from 'lucide-react'
import React from 'react'

export default function Userinfo() {
  return (
    <div className="flex justify-between items-center w-full max-w-md mx-auto py-2 px-1 bg-gray-800 rounded-md shadow-md mb-2">
      {/* User part */}
      <div className="flex items-center"> 
        <CircleUserRound color="white" size={40} className="mr-3 bg-gray-700 rounded-full shadow" />
        <p className="text-white text-base font-light tracking-wide">Ron Tiwari</p>
      </div>
      {/* icons part */}
      <div className="flex items-center bg-gray-700 rounded-md px-3 py-1 shadow-sm">
        <button className="p-1 mx-1 rounded-full hover:bg-gray-600 transition-colors duration-150">
          <Menu color="white" size={20} />
        </button>
        <button className="p-1 mx-1 rounded-full hover:bg-gray-600 transition-colors duration-150">
          <Video color="white" size={20} />
        </button>
        <button className="p-1 mx-1 rounded-full hover:bg-gray-600 transition-colors duration-150">
          <UserRoundPen color="white" size={20} />
        </button>
      </div>
    </div>
  )
}
