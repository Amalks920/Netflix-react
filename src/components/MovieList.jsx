import React, { useContext } from 'react'
import MovieContainer from './MovieContainer';
import NowPlayingMovieContext from '../../utils/NowPlayingMovieContext';

const MovieList = ({title,movies}) => {

   
  return (
    <div className='ms-28'>
        <h1 className='text-5xl py-12 text-white'>{title}</h1>
    <div className="flex overflow-y-scroll hide-scrollbar">
    <div className='flex gap-4'>
        {movies.map((movie,index)=><MovieContainer key={movie?.id} posterPath={movie.poster_path}/>)}
    </div>
    </div>
    </div>
  )
}

export default MovieList;