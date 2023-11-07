import React, { useContext } from 'react'
import MovieList from './MovieList'
import NowPlayingMovieContext from '../../utils/NowPlayingMovieContext'


const SecondaryContainer = () => {
    const movies=useContext(NowPlayingMovieContext)

  return (
    
    <div className='bg-black'>
        <div className='-mt-96 relative'>
        <MovieList title={'Now Playing'} movies={movies}/>
        <MovieList title={'Trending'} movies={movies}/>
        <MovieList title={'Action'} movies={movies}/>
        <MovieList title={'Adventure'} movies={movies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer