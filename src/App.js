import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './component/Header';
import Main from './page/Main';
import Footer from './component/Footer';
import Login from './page/Login';

function App() {
  const [movieData,setMovieData] = useState(null);
  const [popularMovieData,setPopularMovieData] = useState(null);
  const [popularTVData,setPopularTVData] = useState(null);

  useEffect(()=>{
    const MovieInfo = async () => {
      try {
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=b753e19904babfa94a5eeb44a01f2942&language=ko-KR`;
        let response = await fetch(url);
        let data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    MovieInfo();
  },[]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzUzZTE5OTA0YmFiZmE5NGE1ZWViNDRhMDFmMjk0MiIsInN1YiI6IjY1N2Q0OTJjNWM1Y2M4MDZiODk1ZWYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UuCn27X3PlaTmYAEKNhX6-Wu63w5bfe1yUtYqUwZF-0'
          }
        };
  
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options);
        const data = await response.json();
        setPopularMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
  
    fetchPopularMovies();
  }, []);

  useEffect(()=>{
    const PopularTV = async () =>{
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzUzZTE5OTA0YmFiZmE5NGE1ZWViNDRhMDFmMjk0MiIsInN1YiI6IjY1N2Q0OTJjNWM1Y2M4MDZiODk1ZWYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UuCn27X3PlaTmYAEKNhX6-Wu63w5bfe1yUtYqUwZF-0'
          }
        };

        const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1', options);
        const data = await response.json();

        setPopularTVData(data);
      }catch(error){
        console.error('Error fetching TV data:', error);
      }
    };
    PopularTV();
  },[]);
  

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/main' element= {movieData && movieData.results ? (
            <Main movieData={movieData} popularMovieData={popularMovieData} popularTVData={popularTVData}/>
          ) : (
            <p>Loading...</p>
          )}></Route>
          <Route path='/login' element={<Login/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
