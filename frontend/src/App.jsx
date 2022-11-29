// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import GenderStat from './pages/GenderStat'
import Crime from './pages/Crime'
import PieTest from './pages/PieTest';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='queryContainer'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/genderstat" element={<GenderStat />} />
          <Route path = "/piechart" element={<PieTest />} />
          <Route path = "/crime" element={<Crime />} />
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  )
}

export default App
