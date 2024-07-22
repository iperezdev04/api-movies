import { useEffect, useState } from 'react'
import './App.css';

/*-----------------------------------------------------*/
import { API_KEY } from './API.JS'
import { MovieList } from './components/Movie/MovieList';
/*-----------------------------------------------------*/
import { Button } from './components/UI/Button/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
/*-----------------------------------------------------*/
function App() {


  const [movies, setMovies] = useState([]) //ESTADO PARA GUARDAR ARRAY DE PELICULAS
  const [page, setPage] = useState(1); //ESTADO INICIAL DE LA PAGINACION = 1
  const [cache, setCache] = useState({}); // ESTADO PARA GUARDAR CACHE DE PELICULAS 
  const [loading, setLoading] = useState(false);


  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  useEffect(() => {

    if (cache[page]) {
      setMovies(cache[page]);
    } else {
      getMovies();
    }

  }, [page]);


  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(url + `&language=es-MX&page=${page}`);
      const data = await response.json();
      setMovies(data.results)
      setCache((prevCache) => ({ ...prevCache, [page]: data.results }));
      console.log(cache)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
