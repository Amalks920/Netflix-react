import React, { useContext } from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import NowPlayingMovieContext from '../../utils/NowPlayingMovieContext'

const MainContainer = () => {
const movies=useContext(NowPlayingMovieContext);

if(movies.length==0) return 
const {original_title,overview,id}=movies[12]
console.log(movies)


  return (

   
    <div className='border border-black'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer