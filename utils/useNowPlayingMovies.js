import { useEffect, useContext } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "./constants";
import NowPlayingMovieContext from "./NowPlayingMovieContext";

const useNowPlayingMovies = () => {
  const movies = useContext(NowPlayingMovieContext);

  const fetchNowPlayingMovies = async () => {
    const movieData = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
    const parsedData = await movieData.json();
    return parsedData.results;
  };

  useEffect(() => {
    const result = fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
