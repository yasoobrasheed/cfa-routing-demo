import { Link, Routes, Route } from 'react-router-dom'
import Narwhal from './Narwhal'

function Narwhals() {
    const narwhals = [
        {id: '1', firstName: 'Zenel', lastName: 'Hila'},
        {id: '2', firstName: 'Bora', lastName: 'Dikolli'},
        {id: '3', firstName: 'Yasoob', lastName: 'Rasheed'},
    ]

    return (
        <div>
            <h1> Narwhals </h1>

            <ul>
                {
                    narwhals.map(narwhal => (
                        <li>
                            <Link to={narwhal.id}>
                                {narwhal.id}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <Routes>
                <Route path=":narwhalId" element={<Narwhal narwhals={narwhals} />}/>
            </Routes>
        </div>
    )
}

export default Narwhals