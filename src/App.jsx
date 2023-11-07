import { useContext, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Body'
import Home from './pages/Home'
import { Outlet,createBrowserRouter } from 'react-router-dom'
import NowPlayingMovieContext from '../utils/NowPlayingMovieContext'
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from '../utils/constants'


function App() {

  const [nowPlayingMovies,setNowPlayingMovies]=useState([])

  const fetchNowPlayingMovies=async ()=>{
    const movieData=await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS)
    const parsedData=await movieData.json()
     setNowPlayingMovies(parsedData.results)
  }

  useEffect(()=>{
    fetchNowPlayingMovies()
  },[])


  return (
    <div className='overflow-hidden'>
  <NowPlayingMovieContext.Provider value={nowPlayingMovies}>
    <Body/>
  </NowPlayingMovieContext.Provider>
    </div>
  )
}





export default App
