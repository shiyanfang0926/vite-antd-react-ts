import { useState } from 'react'

import './App.css'
import AppMain from '../src/layout/AppMain'
import AppHeader from '../src/layout/AppHeader'
import AppSider from '../src/layout/AppSider'

function App() {

  return (
    <>
      <div className='w-full h-full'>
      <AppHeader></AppHeader>
        <div className='flex h-full'>
            <AppSider></AppSider>
          <div  className="flex-1 w-full h-full">
            <AppMain></AppMain>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
