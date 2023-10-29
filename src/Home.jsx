import React from 'react'
import TodoContainer from './components/TodoContainer'

function Home() {
  return (
    <div className='w-[100%] sm:h-[100vh] h-auto'>
     
    <div className='mt-[3em] sm:w-[200px] w-[100%] rounded-e-[50px] bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] '>
        <h1 className='text-[30px] text-center font-medium'>Todo App</h1>
    </div>
    <TodoContainer/>

    </div>
  )
}

export default Home