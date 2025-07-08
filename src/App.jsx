import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex items-center justify-center bg-slate-900 w-auto h-screen '>
      <div className='bg-white/10 w-[90%] h-[90%] overflow-auto rounded-2xl shadow-xl p-6 backdrop-blur-2xl border border-white/20 ring-1 ring-white/10'>
        {/* Scrollable content goes here */}
      </div>
    </div>
  )
}

export default App
