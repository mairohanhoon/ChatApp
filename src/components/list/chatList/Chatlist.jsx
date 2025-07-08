import { CircleUser, Minus, Plus, Search, UserRoundPlus } from 'lucide-react'
import React, { useState } from 'react'

export default function Chatlist() {

  const [addMode, setAddMode] = useState(false)
  return (
    <div className="bg-gray-800 p-2 rounded-xl shadow-md w-full max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center bg-gray-700 rounded-md px-2 py-1 flex-grow mr-2">
          <Search color='white' className='m-1 opacity-70' />
          <input 
            type="text" 
            placeholder='Search' 
            className="bg-transparent outline-none text-white placeholder-white px-2 py-1 flex-grow" 
          />
        </div>
        <button
        onClick={()=> setAddMode((prev) => !prev)}
        className="ml-2 p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow hover:scale-105">
          {(addMode) ? <Minus color='white' size={22} /> : <Plus color='white' size={22} />}
        </button>
      </div> 

      {/* messages start from here */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2 hover:bg-gray-600 transition-colors cursor-pointer shadow-sm">
          <CircleUser className="text-white mr-3" size={36} />
          <div className="flex flex-col">
            <span className="text-white font-semibold text-base">John James</span>
            <span className="text-gray-300 text-sm">Latest Message ...</span>
          </div>
        </div>

        <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2 hover:bg-gray-600 transition-colors cursor-pointer shadow-sm">
          <CircleUser className="text-white mr-3" size={36} />
          <div className="flex flex-col">
            <span className="text-white font-semibold text-base">John James</span>
            <span className="text-gray-300 text-sm">Latest Message ...</span>
          </div>
        </div>

      </div>
    </div>
  )
}
