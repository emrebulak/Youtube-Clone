import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import ReactPlayer from "react-player";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    api
      .get(`/video/info?id=${videoId}&extend=1`)
      .then((res) => {
        console.log("Video Detail : ", res.data);
        setVideo(res.data);
      })
      .catch((err) => {
        console.log("Video Detail Error : ", err);
      });
  }, []);

  return (
    <div className="detail-page h-screen">
      <div>
        <div className="h-[50vh] lg:h-[70vh] rounded-lg overflow-hidden">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            light
            controls
            style={{ borderRadius: "10px" }}
            url={`https://www.youtube.com/watch?v=${videoId}`}
          />
        </div>

        <h2 className="my-3 text-xl font-bold">{video.title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div>
              <img
                className="rounded-full h-12 w-12"
                src={video.channelThumbnail[0].url}
                alt="Channel Thumbnail"
              />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <h4 className="font-semibold">{video.channelTitle}</h4>
              <p className="text-gray-400 text-sm">
                {video.subscriberCountText}
              </p>
            </div>
            <div>
              <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300">
                Abone ol
              </button>
            </div>
          </div>

          <div className="flex items-center bg-[#272727] rounded-full cursor-pointer p-2">
            <div className="py-2 px-5 border-r border-gray-400 hover:brightness-50 transition duration-300">
              <AiFillLike />
            </div>

            <div className="py-2 px-5 hover:brightness-50 transition duration-300">
              <AiFillDislike />
            </div>

          </div>
        </div>
      </div>

      <div className="bg-blue-500">Sağ taraf</div>
    </div>
  );
};

export default VideoDetail;
