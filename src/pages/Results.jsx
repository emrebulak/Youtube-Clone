import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

const Results = () => {
  const [page, setPage] = useState(1);
  const [token, setToken] = useState();
  const [data, setData] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {

    const params = {
      query: query,
      token: page > 1 ? token : undefined
    }

    api.get(`/search`, { params }).then((res) => {
      setToken(res.data.continuation);
      setData((prev) => prev.concat(res.data.data));
    });

  }, [query, page]);

  return (
    <div className="flex gap-3">
      <Sidebar />

      <div className="mx-auto py-4 px-10 w-full">

        <h2 className="text-xl mb-5">
          <span className="font-bold">{query}</span> için sonuçlar
        </h2>

        <div className="flex flex-col gap-5 justify-center">

          {
            data?.map((item, index) => item?.type ==='video' && (
              <VideoCard key={index} item={item} isRow={true} />
            ))
          }

          <button onClick={() => setPage(page + 1)} className="bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition duration-200">
            Daha Fazla
          </button>

        </div>
      </div>
    </div>);
};

export default Results;
