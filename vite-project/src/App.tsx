import './App.css'
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'
import Landing from './pages/Landing.tsx'

function App() {

  return (
    <>
    <div className='app-container' data-theme="light">
      <Header />
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
