import './App.css'
import List from './pages/List'
import Mod from './pages/Mod'
import Del from './pages/Del'
import Upd from './pages/Upd'
import Single from './pages/Single'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>

      <Routes>
        <Route path='/lista' element={<List/>}></Route>
        <Route path='/modositas/:id' element={<Mod/>}></Route>
        <Route path='/torles/:id' element={<Del/>}></Route>
        <Route path='/feltoltes' element={<Upd/>}></Route>
        <Route path='/szingli/:id' element={<Single/>}></Route>
      </Routes>
    </>
  )
}


export default App
