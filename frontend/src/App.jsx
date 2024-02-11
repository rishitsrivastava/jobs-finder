import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import register from './pages/register'
import home from './pages/home'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={home} />
          <Route path='/register' Component={register} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
