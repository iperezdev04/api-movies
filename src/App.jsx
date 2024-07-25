import { useContext, useEffect, useState } from 'react'
import './App.css';

/*-----------------------------------------------------*/

import { MovieList } from './components/Movie/MovieList';
/*-----------------------------------------------------*/
import { Button } from './components/UI/Button/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { ApiContext } from './context/Apicontext';
/*-----------------------------------------------------*/
function App() {


  // const [movies, setMovies] = useState([]) 
  // const [page, setPage] = useState(1); 
  // const [cache, setCache] = useState({});
  // const [loading, setLoading] = useState(false);


  // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  // const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  // useEffect(() => {

  //   if (cache[page]) {
  //     setMovies(cache[page]);
  //   } else {
  //     getMovies();
  //   }

  // }, [page]);


  // const getMovies = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(url + `&language=es-MX&page=${page}`);
  //     const data = await response.json();
  //     const genres = await getGenres();

  //     console.log(genres)

  //     const results = data.results.map(movie => ({
  //       id: movie.id,
  //       title: movie.title,
  //       genre: movie.genre_ids.map(id => ({
  //         id: genres.find(genre => genre.id === id).id,
  //         name: genres.find(genre => genre.id === id).name
  //       })),
  //       image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  //     }));;

  //     setMovies(results)
  //     setCache((prevCache) => ({ ...prevCache, [page]: results }));
  //     // console.log("cache:",cache)
  //     // console.log("results:",results);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // const getGenres = async () => {

  //   // const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;


  //   try {
  //     const response = await fetch(genreUrl);
  //     const data = await response.json();
  //     return data.genres;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const { movies, loading,getMovies,page,setMovies,cache,setPage } = useContext(ApiContext);


  useEffect(() => {
  
    if (cache[page]) {
      setMovies(cache[page]);
    } else {
      getMovies();
    }

  }, [page]);

  return (
    <>
    <div className="container">
    {
        loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1>Movies Database</h1>
            <MovieList movies={movies} />

          <div className="button-group">
          <Button 
              onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
              name='Back' 
              disabled={page === 1} 
              icon={<FaArrowLeft />} 
              className="btn-left"
            />
            
            <Button 
              onClick={() => setPage((prevPage) => Math.min(prevPage + 1, 500))}
              name='Next' 
              icon={<FaArrowRight />} 
              className="btn-right"
            />
          </div>

          </>
        )
      }
    </div>
    </>
  )
}

export default App;
