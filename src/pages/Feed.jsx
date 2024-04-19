import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";

const Feed = () => {
    return (
        <div className="flex gap-7">
            <Sidebar />
            <Videos />
        </div>
    )
}

export default Feed