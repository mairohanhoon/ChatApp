import { useState } from 'react'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex items-center justify-center bg-slate-900 w-auto h-screen '>
      <div className='flex bg-white/10 w-[90%] h-[90%] overflow-auto rounded-2xl shadow-xl p-6 backdrop-blur-2xl border border-white/20 ring-1 ring-white/10'>
        <List/>
        <div className="w-px bg-gray-700 mx-4 rounded-full" />
        <Chat/>
        <div className="w-px bg-gray-700 mx-4 rounded-full" />
        <Detail/>
      </div>
    </div>
  )
}

export default App
