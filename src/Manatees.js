import { Link, Routes, Route } from 'react-router-dom'
import ManateeOne from './ManateeOne'
import ManateeTwo from './ManateeTwo'

function Manatees() {
    return (
        <div>
            <h1> Manatees </h1>

            <nav>
                <li>
                    <Link to="/manatees/manatee-one">Manatee One</Link>
                </li>
                <li>
                    <Link to="/manatees/manatee-two">Manatee Two</Link>
                </li>
            </nav>

            <Routes>
                <Route path="manatee-one/" element={<ManateeOne />} />
                <Route path="manatee-two/" element={<ManateeTwo />} />
            </Routes>
        </div>
    )
}

export default Manatees