 import React, {useState} from "react";
import {MdSearch} from "react-icons/md"
import MovieCard from "../components/MovieCard"
import '../css/Home.css';

const Home = () => {
    const [query, setQuery] = useState("");

    const movies = [
        {id:1, title:"John Wick", release_date:"2020"},
        {id:2, title:"Terminator", release_date:"1999"},
        {id:3, title:"The Matrix", release_date:"1998"}
    ]

    const handleSearch = (e) =>{
        e.preventDefault();
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for movies.." 
                    className="search-input"
                    value={query}
                    onChange={(e)=>{setQuery(e.target.value)}}
                    />
                <button type="submit" className="search-btn"><MdSearch/></button>
            </form>

            <div className="movies-grid">
            {movies
                    .filter(movie => movie.title.toLowerCase().startsWith(query.toLowerCase()))
                    .map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
            </div>
        </div>
    );
}


export default Home