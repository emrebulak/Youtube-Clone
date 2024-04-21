import { AiFillDislike, AiFillLike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  return (
    <>
      <h2 className="my-3 text-xl font-bold">{video?.title}</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div>
            <img
              className="rounded-full h-12 w-12"
              src={video?.channelThumbnail[0].url}
              alt="Channel Thumbnail"
            />
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <h4 className="font-semibold">{video?.channelTitle}</h4>
            <p className="text-gray-400 text-sm">
              {video?.subscriberCountText}
            </p>
          </div>
          <div>
            <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300">
              Abone ol
            </button>
          </div>
        </div>

        <div className="flex items-center bg-darkgray rounded-full cursor-pointer p-2">
          <div className="py-2 px-5 border-r border-gray-400 hover:brightness-50 transition duration-300">
            <AiFillLike />
          </div>

          <div className="py-2 px-5 hover:brightness-50 transition duration-300">
            <AiFillDislike />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelInfo;
