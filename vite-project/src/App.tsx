import './App.css'
import Header from './components/Header.tsx'
import ComplaintPage from './pages/Complaint.tsx';
import Landing from './pages/Landing.tsx'
import useLocalStorage from 'use-local-storage'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);

  return (
    <>
    <div className='app-container' data-theme={isDark ? 'dark' : 'light'}>
      <Header isDark={isDark} handleChange={(checked) => setIsDark(checked)} />
      <div className='content-container'>
        <div className='main-content'>
          <div className='main-content'>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/form' element={<ComplaintPage />} />
            </Routes>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
