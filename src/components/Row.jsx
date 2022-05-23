import React, { useState, useEffect } from 'react'
// import axios from './axios';
import axios from '../axios';
import '../components/Row.css'
import YouTube from 'react-youtube';
const baseURL = 'https://image.tmdb.org/t/p/original';

function Row({title, fetchUrl, isLargeRow}) {

  console.log(fetchUrl)
  // Using UseState > HOOK 
  const [movies, setMovies] =  useState([]);
  const [trailerURL, setTrailerURL] =  useState("")
  console.log({allMovies: movies})

  useEffect(() => {
    //   console.log('I am React useEffect() => HOOK')
    async function fetchData() {
        // const request = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`);
        // console.log(request)

        const request = await axios.get(fetchUrl);
        console.log(request)
        console.log(request.data.results)
        // return request;
        // Set movies 
        setMovies(request.data.results);
        return request;

        // https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
    };

    fetchData();
    
  }, [fetchUrl]);


  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const getMovieTrailer = (movie) => {

    // alert('Hi')
    if(trailerURL) {
      setTrailerURL("")
    }else {
      movieTrailer(movie?.name || "")
      .then(url => {

      }).catch(err => err)
    }
    movie.preventDefault();
    return true;
  };

  return (
      <div className='row'>
         <h2 className='feature-heading'>{title}</h2>
            {/* // 1. { Title } */}

            <div className="row__posters">
              {/* All the posters are including in this row */}
              {movies.map((movie, key) => {
                return(
                  <img
                    onClick={getMovieTrailer}
                    key={movie.id} 
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${baseURL}${isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}></img>
                );
              })}
            </div>

            {trailerURL && <YouTube videoId= {trailerURL} opts={opts} />}
      </div>
  );
}

export default Row