


import './Card.css';

const Card = ({ title, description }) => {
    return (
        <div className="card" >
            <h1 className='title'>{title}</h1>
            <h2 className='description'>{description}</h2>
        </div>
    );
}

export default Card;