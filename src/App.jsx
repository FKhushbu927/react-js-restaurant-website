
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './pages/SharedPages/Footer'
import Header from './pages/SharedPages/Header'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
