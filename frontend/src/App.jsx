// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import GenderStat from './pages/GenderStat'
import PieTest from './pages/PieTest';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/genderstat" element={<GenderStat />} />
          <Route path = "/piechart" element={<PieTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
