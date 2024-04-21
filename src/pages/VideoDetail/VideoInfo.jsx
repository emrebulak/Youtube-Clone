import millify from "millify";
import { useState } from "react";

const VideoInfo = ({ video }) => {
  const [expand, setExpand] = useState(false);

  const date = new Date(video?.publishDate).toLocaleDateString("tr", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const text = expand
    ? video?.description
    : video?.description.slice(0, 300) + "... daha fazla";

  const line = text?.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div
      onClick={() => setExpand(!expand)}
      className="bg-darkgray mt-4 mb-10 rounded-md px-2 py-4 hover:opacity-90 transition duration-300"
    >
      <div className="flex gap-4 my-2">
        <p className="font-bold text-sm">
          {millify(video?.viewCount)} görüntülenme
        </p>
        <p className="font-bold text-sm">{date}</p>
      </div>
      <div>{line}</div>
    </div>
  );
};

export default VideoInfo;
