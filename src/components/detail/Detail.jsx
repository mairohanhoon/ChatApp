import { CircleUser, ChevronDown, Settings, Shield, Image, UserX, LogOut } from 'lucide-react'
import React, { useState } from 'react'

export default function Detail() {
  const [chatSettingsOpen, setChatSettingsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [photosOpen, setPhotosOpen] = useState(false)

  return (
    <div className='flex-1/4 bg-gray-800 rounded-lg p-6 flex flex-col'>
      {/* User Image */}
      <div className='flex justify-center mb-4'>
        <CircleUser color='white' size={120} className='bg-gray-700 rounded-full p-2' />
      </div>

      {/* User Name */}
      <h2 className='text-white text-xl font-semibold text-center mb-2'>John James</h2>

      {/* About Section */}
      <div className='text-center mb-6'>
        <p className='text-gray-400 text-sm'>Loves building chat apps and exploring new technologies. Always up for a good conversation about coding and innovation.</p>
      </div>

      {/* Dropdown Sections */}
      <div className='space-y-4 flex-1'>
        {/* Chat Settings */}
        <div className='bg-gray-700 rounded-lg'>
          <button 
            onClick={() => setChatSettingsOpen(!chatSettingsOpen)}
            className='w-full flex items-center justify-between p-4 text-white hover:bg-gray-600 transition-colors rounded-lg'
          >
            <div className='flex items-center'>
              <Settings size={20} className='mr-3' />
              <span>Chat Settings</span>
            </div>
            <ChevronDown size={20} className={`transition-transform ${chatSettingsOpen ? 'rotate-180' : ''}`} />
          </button>
          {chatSettingsOpen && (
            <div className='px-4 pb-4 space-y-2'>
              <div className='text-gray-300 text-sm p-2 hover:bg-gray-600 rounded cursor-pointer'>Mute notifications</div>
              <div className='text-gray-300 text-sm p-2 hover:bg-gray-600 rounded cursor-pointer'>Customize chat theme</div>
              <div className='text-gray-300 text-sm p-2 hover:bg-gray-600 rounded cursor-pointer'>Message history</div>
            </div>
          )}
        </div>

        {/* Privacy & Help */}
        <div className='bg-gray-700 rounded-lg'>
          <button 
            onClick={() => setPrivacyOpen(!privacyOpen)}
            className='w-full flex items-center justify-between p-4 text-white hover:bg-gray-600 transition-colors rounded-lg'
          >
            <div className='flex items-center'>
              <Shield size={20} className='mr-3' />
              <span>Privacy & Help</span>
            </div>
            <ChevronDown size={20} className={`transition-transform ${privacyOpen ? 'rotate-180' : ''}`} />
          </button>
          {privacyOpen && (
            <div className='px-4 pb-4 space-y-2'>
              <div className='text-gray-300 text-sm p-2 hover:bg-gray-600 rounded cursor-pointer'>Privacy settings</div>
              <div className='text-gray-300 text-sm p-2 hover:bg-gray-600 rounded cursor-pointer'>Report user</div>
              <div className='text-gray-300 text-sm p-2 hover:bg-gray-600 rounded cursor-pointer'>Get help</div>
            </div>
          )}
        </div>

        {/* Shared Photos */}
        <div className='bg-gray-700 rounded-lg'>
          <button 
            onClick={() => setPhotosOpen(!photosOpen)}
            className='w-full flex items-center justify-between p-4 text-white hover:bg-gray-600 transition-colors rounded-lg'
          >
            <div className='flex items-center'>
              <Image size={20} className='mr-3' />
              <span>Shared Photos</span>
            </div>
            <ChevronDown size={20} className={`transition-transform ${photosOpen ? 'rotate-180' : ''}`} />
          </button>
          {photosOpen && (
            <div className='px-4 pb-4'>
              <div className='text-gray-300 text-sm'>No shared photos yet</div>
            </div>
          )}
        </div>
      </div>

      {/* Block User Button */}
      <div className='mt-6'>
        <button className='w-full flex items-center justify-center p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors'>
          <UserX size={20} className='mr-2' />
          Block User
        </button>
      </div>

      {/* Logout Button */}
      <div className='mt-3'>
        <button className='w-full flex items-center justify-center p-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors'>
          <LogOut size={20} className='mr-2' />
          Logout
        </button>
      </div>
    </div>
  )
}
