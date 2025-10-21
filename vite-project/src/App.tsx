import './App.css'
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'
import Landing from './pages/Landing.tsx'
import useLocalStorage from 'use-local-storage'

function App() {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);

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
