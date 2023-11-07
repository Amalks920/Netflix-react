import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constants';

const MovieContainer = ({posterPath}) => {
  return (
    <div className="w-72 md:w-96 pr-4 rounded-xl">
        <img src={IMAGE_CDN_URL +'/'+ posterPath} alt="poster" />
    </div>
  )
}

export default MovieContainer;