import React, { useEffect, useState } from "react";
import { API_OPTIONS, COMMON_URL } from "../../utils/constants";

const VideoBackground = ({ movieId }) => {
const [trailerId,setTrailerId]=useState(null)

  useEffect(() => {
    fetchTrailer();
  }, []);

  const fetchTrailer = async () => {
    const trailer = await fetch(`${COMMON_URL}/${movieId}/videos`, API_OPTIONS);
    const json = await trailer.json();
    const filteredTrailer=json?.results?.filter((el,index)=>{
        return el.type==="Trailer"
    });

    console.log(filteredTrailer[0])
    setTrailerId(filteredTrailer[0].key)

  };

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video -mt-40"
        src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  );
};

export default VideoBackground;
