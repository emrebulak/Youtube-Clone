import { useContext } from "react";
import VideoCard from "./VideoCard";
import { VideoContext } from "../context/videoContext";
import Error from "./Error";
import Loader from "./Loader";

const Videos = () => {
  const { videos, isLoading, error } = useContext(VideoContext);

  console.log("Videos : ", videos);

  return (
    <div className="my-3 videos">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        videos.map((item, index) => item.type == 'video' && <VideoCard item={item} key={index} />)
      )}
    </div>
  );
};

export default Videos;
