import React, { useState, useEffect } from 'react'
import axios from '../axios';
import "../components/Banner.css"


import requests from '../requests';


function Banner({fetchUrl}) {

  const [movie, setMovie] = useState([]);

  const discription = document.querySelector('.banner_description');
  // console.log({
  //         textLenth: discription.length,
  //         textDescription: discription
  //       });

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log({fetchDataFromBanner: request})
      // const singleMovie = request.data.results[Math.floor(Math.random() * request.data.results.length - 1 )];
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1 )]);

      // console.log({singleMovie: singleMovie})
    };

    fetchData();
  }, []);


  console.log({singleMovieFromAPI: movie})

  return (
    <header
    className="banner"
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.603)),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }}
  >
    <div className="banner_content">
      {/* ? is optional chaining */}
      <h1 className="banner_title">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <div className="banner_buttons">
        <button className="banner_button btn-play">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description">{movie?.overview}</h1>
    </div>
    <div className="banner_fadeBottom"></div>
  </header>
  )
}

export default Banner