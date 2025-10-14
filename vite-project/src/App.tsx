import './App.css'
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'
import Landing from './pages/Landing.tsx'

import React, { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
    <div className='app-container' data-theme={isDark ? 'dark' : 'light'}>
      <Header isDark={isDark} handleChange={(checked) => setIsDark(checked)} />
      <div className='content-container'>
        <Sidebar />
        <div className='main-content'>
          <Landing />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
