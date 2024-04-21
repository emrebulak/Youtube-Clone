import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";
import ChannelInfo from "./ChannelInfo";
import VideoCard from "../../components/VideoCard";
import Comments from "./Comments";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    api
      .get(`/video/info?id=${videoId}&extend=1`)
      .then((res) => {
        setVideo(res.data);
      })
      .catch((err) => {
        console.log("Video Detail Error : ", err);
      });

    api
      .get(`/comments?id=${videoId}&sort_by=newest`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log("Comments Error : ", err);
      });
  }, [videoId]);

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

        <ChannelInfo video={video} />

        <VideoInfo video={video} />

        <Comments comments={comments} />
      </div>

      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos?.data?.map(
          (item) =>
            item.type === "video" && (
              <VideoCard key={item.videoId} item={item} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
