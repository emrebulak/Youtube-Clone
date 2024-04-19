import { useContext } from "react"
import { VideoContext } from "../context/videoContext"

const Categories = ({ item }) => {
    const { selectedCategory, setSelectedCategory } = useContext(VideoContext);

    return (
        <div onClick={() => setSelectedCategory(item)}>
            <div className={`${item.name === selectedCategory.name && 'bg-[#2d2d2d]'} flex gap-2 py-3 px-2 md:px-3 items-center md:text-base cursor-pointer rounded-md hover:bg-[#2d2d2d] text-gray-200`}>
                <span className='max-sm: text-2xl'>{item.icon}</span>
                <span className='max-sm:hidden'>{item.name}</span>
            </div>

            {item.divider && <hr className='border-gray-600' />}
        </div>
    )
}

export default Categories;