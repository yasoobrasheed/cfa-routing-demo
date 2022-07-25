import { useParams } from 'react-router-dom'

function Narwhal(props) {
    const params = useParams()
    const narwhalId = params.narwhalId

    const data = props.narwhals.find(narwhal => narwhal.id === narwhalId)

    return (
        <div>
            <h1> Narwhal {data.id}: {data.firstName} {data.lastName} </h1>
        </div>
    )
}

export default Narwhal