import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Comments = ({ comments }) => {
  console.log("Yorumlar : ", comments);

  return (
    comments && (
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="font-bold">{comments.commentsCount} Yorum</h2>
        <input
          className="w-full outline-none bg-transparent border-b py-2 border-gray-400"
          type="text"
          placeholder="Yorum ekleyin..."
        />

        {comments.data.map((item) => (
          <div key={item.authorChannelId} className="flex gap-3 items-start">
            <div>
              <img
                className="rounded-full w-12 h-12"
                src={item?.authorThumbnail[0]?.url}
                alt="logo"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex gap-3">
                <span className="font-semibold">{item?.authorText}</span>
                <span className="text-sm text-gray-400">
                  {item?.publishedTimeText}
                </span>
              </p>

              <p>{item?.textDisplay}</p>

              <div className="flex items-center gap-2">
                <div className="flex gap-1 cursor-pointer p-1 rounded-full hover:bg-gray-600 transition duration-200">
                  <AiOutlineLike className="size-5" />
                  <span>{item?.likesCount}</span>
                </div>
                <div className="p-1 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                  <AiOutlineDislike className="size-5 " />
                </div>
                <div className="text-sm p-1 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                  Yanıtla
                </div>
              </div>

              {item?.replyCount > 0 && (
                <div className="flex gap-2 items-center text-blue-400 py-1 px-3 rounded-full hover:bg-blue-800 transition duration-200 w-fit cursor-pointer">
                  <IoMdArrowDropdown />
                  <span className="text-sm">{item?.replyCount}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default Comments;
