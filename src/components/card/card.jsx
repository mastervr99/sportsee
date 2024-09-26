import './card.scss'
import { Link } from 'react-router-dom';

function Card({name, userId }) {
    console.log("card id : " + userId);
    return (
        <Link to={`/profile/${userId}`} className='card' >
            <h3>{name}</h3>
        </Link>
    );
}

export default Card;
