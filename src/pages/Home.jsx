import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../../utils/useNowPlayingMovies'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
import Footer from '../components/Footer'

const Home = () => {

  useNowPlayingMovies()

  return (
   
    <div className=''>
       <Header/>
       <MainContainer/>
       <SecondaryContainer/>
       <Footer/>
    </div>
  )
}

export default Home