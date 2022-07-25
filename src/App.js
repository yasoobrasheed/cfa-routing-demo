import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './Home.js'
import Manatees from './Manatees.js'
import Narwhals from './Narwhals.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/manatees">Manatees</Link>
          </li>
          <li>
            <Link to="/narwhals">Narwhals</Link>
          </li>
        </nav>

        <Routes>
          <Route index element={<Home />} />
          <Route path={"manatees/*"} element={<Manatees />} />
          <Route path={"narwhals/*"} element={<Narwhals />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
