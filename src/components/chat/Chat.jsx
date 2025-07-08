import { CircleUser, Image, Info, Send, Video } from 'lucide-react'
import React, { useRef, useEffect } from 'react'

export default function Chat() {
  const chatMessagesRef = useRef(null)

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }, [])

  return (
    <div className='flex-1/2 flex flex-col h-full bg-gray-800 rounded-lg'>
      {/* Top Section - Header */}
      <div className='flex items-center justify-between p-4 border-b border-gray-700'>
        <div className='flex items-center'>
          <CircleUser color='white' size={40} className='mr-3' />
          <div className="flex flex-col">
            <h2 className='text-white font-semibold text-lg'>John James</h2>
            <span className="text-gray-400 text-xs mt-0.5">Loves building chat apps</span>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <button className='p-2 rounded-full hover:bg-gray-700 transition-colors'>
            <Video color='white' size={20} />
          </button>
          <button className='p-2 rounded-full hover:bg-gray-700 transition-colors'>
            <Info color='white' size={20} />
          </button>
        </div>
      </div>

      {/* Middle Section - Chat Messages */}
      <div ref={chatMessagesRef} className='flex-1 p-4 overflow-y-auto space-y-4'>
        {/* Message from other person */}
        <div className='flex items-start space-x-3'>
          <CircleUser color='white' size={32} />
          <div>
            <div className='bg-gray-700 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>Hey! How are you doing today?</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block'>09:00 AM</span>
          </div>
        </div>

        {/* Message from current user */}
        <div className='flex items-start justify-end space-x-3'>
          <div>
            <div className='bg-blue-600 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>I'm doing great! Thanks for asking. How about you?</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block text-right'>09:01 AM</span>
          </div>
        </div>

        {/* Another message from other person */}
        <div className='flex items-start space-x-3'>
          <CircleUser color='white' size={32} />
          <div>
            <div className='bg-gray-700 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>Pretty good! Just working on some projects. What are you up to?</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block'>09:02 AM</span>
          </div>
        </div>

        {/* Another message from current user */}
        <div className='flex items-start justify-end space-x-3'>
          <div>
            <div className='bg-blue-600 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>Same here! Working on this chat app actually 😄</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block text-right'>09:03 AM</span>
          </div>
        </div>

        {/* Add more messages to demonstrate scrolling */}
        <div className='flex items-start space-x-3'>
          <CircleUser color='white' size={32} />
          <div>
            <div className='bg-gray-700 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>That sounds awesome! What technologies are you using?</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block'>09:04 AM</span>
          </div>
        </div>

        <div className='flex items-start justify-end space-x-3'>
          <div>
            <div className='bg-blue-600 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>React, Tailwind CSS, and Lucide icons. It's coming along nicely!</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block text-right'>09:05 AM</span>
          </div>
        </div>

        <div className='flex items-start space-x-3'>
          <CircleUser color='white' size={32} />
          <div>
            <div className='bg-gray-700 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>Great stack! I'd love to see it when it's done.</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block'>09:06 AM</span>
          </div>
        </div>

        <div className='flex items-start justify-end space-x-3'>
          <div>
            <div className='bg-blue-600 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>Absolutely! I'll share it with you once it's ready. Thanks for the chat!</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block text-right'>09:07 AM</span>
          </div>
        </div>

        {/* Add more messages to demonstrate scrolling */}
        <div className='flex items-start space-x-3'>
          <CircleUser color='white' size={32} />
          <div>
            <div className='bg-gray-700 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>That sounds awesome! What technologies are you using?</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block'>09:04 AM</span>
          </div>
        </div>

        <div className='flex items-start justify-end space-x-3'>
          <div>
            <div className='bg-blue-600 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>React, Tailwind CSS, and Lucide icons. It's coming along nicely!</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block text-right'>09:05 AM</span>
          </div>
        </div>

        <div className='flex items-start space-x-3'>
          <CircleUser color='white' size={32} />
          <div>
            <div className='bg-gray-700 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>Great stack! I'd love to see it when it's done.</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block'>09:06 AM</span>
          </div>
        </div>

        <div className='flex items-start justify-end space-x-3'>
          <div>
            <div className='bg-blue-600 rounded-lg px-3 py-2 max-w-xs'>
              <p className='text-white text-sm'>Absolutely! I'll share it with you once it's ready. Thanks for the chat!</p>
            </div>
            <span className='text-xs text-gray-400 mt-1 block text-right'>09:07 AM</span>
          </div>
        </div>

        
      </div>

      {/* Bottom Section - Input */}
      <div className='p-4 border-t border-gray-700'>
        <div className='flex items-center space-x-2'>
          <button className='p-2 rounded-full hover:bg-gray-700 transition-colors'>
            <Image color='white' size={20} />
          </button>
          <button className='p-2 rounded-full hover:bg-gray-700 transition-colors'>
            <Video color='white' size={20} />
          </button>
          <div className='flex-1 bg-gray-700 rounded-lg px-3 py-2'>
            <input 
              type='text' 
              placeholder='Type a message...' 
              className='w-full bg-transparent outline-none text-white placeholder-gray-400'
            />
          </div>
          <button className='p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors'>
            <Send color='white' size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
