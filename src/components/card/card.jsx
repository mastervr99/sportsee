import './card.scss'
import { Link } from 'react-router-dom';

function Card({name, id }) {
    return (
        <Link to={`/profile/${id}`} className='card' >
            <h3>{name}</h3>
        </Link>
    );
}

export default Card;
