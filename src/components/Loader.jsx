import { FaUserCircle } from "react-icons/fa";
const Loader = () => {
  let count = new Array(16).fill(1);

  return count.map((item,index) => (
    <div key={index} className="p-4 rounded shadow animate-pulse md:p-6">
      <div className="flex items-center justify-center h-48 mb-4  rounded bg-gray-500"></div>
      <div className="flex items-center mt-4">
        <FaUserCircle className="w-10 h-10 me-3 text-gray-500" />
        <div>
          <div className="h-2.5 rounded-full bg-gray-500 w-44 mb-2"></div>
          <div className="w-16 h-2 rounded-full bg-gray-500"></div>
          <div className="flex gap-2 mt-2">
            <div className="w-28 h-2 rounded-full bg-gray-500"></div>
            <div className="w-28 h-2 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
