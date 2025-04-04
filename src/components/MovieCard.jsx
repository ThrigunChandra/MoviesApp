import React, {useState} from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa6'
import '../css/MovieCard.css'

const MovieCard =  ({movie}) => {
    const [favourite, setFavourite] = useState(false);

    const onFavouriteClick = () => {
        setFavourite(!favourite);
    }

    return (
        <div className='movie-card'>
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className='favorite-btn' onClick={onFavouriteClick}>
                        {favourite ? <FaHeart className='text-red-400'/> : <FaRegHeart />}
                    </button>
                </div>
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;