import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import Moviereviews from './pages/Moviereviews'
import Pagenotfound from './pages/Pagenotfound'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth register/>} />
      <Route path='/moviereviews' element={<Moviereviews/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<Pagenotfound/>} />
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
