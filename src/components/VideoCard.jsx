import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ item, isRow }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/watch?v=${item.videoId}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${isRow && "row"} cursor-pointer`}
    >
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={
            hovered && item.richThumbnail
              ? item.richThumbnail[0].url
              : item?.thumbnail[item.thumbnail.length - 1]?.url
          }
          alt={item.type}
        />
      </div>

      <div className="flex gap-3 mt-3">
        <div>
          <img
            className="c-pic rounded-full h-14 w-14 object-cover"
            src={item.channelThumbnail[0].url}
            alt="Kanal logo"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold line-clamp-2">{item.title}</h2>
          <p>{item.channelTitle}</p>
          <p className="flex items-center gap-3">
            <span>
              {millify(item.viewCount)}{" "}
              <span className="c-title">Görüntüleme</span>
            </span>
            <span className="w-[5px] h-[5px] rounded-full bg-gray-600"></span>
            <span>{item.publishedTimeText}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
