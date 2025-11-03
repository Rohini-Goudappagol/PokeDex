import { Link } from 'react-router-dom'
import './Pokemon.css'
function Pokemon({ name, image, id }) {
    return (
        <div className="pokemon-card">
            <Link to={`/pokemon/${id}`} className='link'>
                <h3>{name}</h3>
                <img src={image} />
            </Link>
        </div>
    )
}

export default Pokemon