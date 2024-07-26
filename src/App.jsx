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
