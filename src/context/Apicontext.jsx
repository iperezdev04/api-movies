import React, { createContext, useState } from 'react';

// import { API_KEY } from './API.JS'


export const ApiContext = createContext();



export const ApiProvider = ({children}) => {


    const url = `https://api.themoviedb.org/3/movie/popular?api_key=74ff8c1985aa1013b1b3f2b52880011c`
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=74ff8c1985aa1013b1b3f2b52880011c`;

    const [movies, setMovies] = useState([]) //ESTADO PARA GUARDAR ARRAY DE PELICULAS
    const [page, setPage] = useState(1); //ESTADO INICIAL DE LA PAGINACION = 1
    const [cache, setCache] = useState({}); // ESTADO PARA GUARDAR CACHE DE PELICULAS 
    const [loading, setLoading] = useState(false);
  

  
    const getMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(url + `&language=es-MX&page=${page}`);
        const data = await response.json();
        const genres = await getGenres();
    
        const results = data.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          genre: movie.genre_ids.map(id => ({
            id: genres.find(genre => genre.id === id).id,
            name: genres.find(genre => genre.id === id).name
          })),
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }));;
  
        setMovies(results)
        setCache((prevCache) => ({ ...prevCache, [page]: results }));
        // console.log("cache:",cache)
        // console.log("results:",results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  
    const getGenres = async () => {
  
      // const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  
  
      try {
        const response = await fetch(genreUrl);
        const data = await response.json();
        return data.genres;
      } catch (error) {
        console.log(error);
      }
    };



    return (
        <ApiContext.Provider value={{movies,setPage,loading,page,getMovies,setMovies,cache,setCache}} >
          {children}
        </ApiContext.Provider>
      )    
}