// import logo from './logo.svg';
// import axios from 'axios';
import React from 'react';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';
import requests from './requests';

function App() {
  return (
    <div className="App">
      {/* Navbar  */}

      <Nav></Nav>


      {/* Top Banner */}
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
       <Row 
          title="Netflix Orignals" 
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true} />
       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
