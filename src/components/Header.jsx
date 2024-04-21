import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaBell } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = (e.target[0].value).trim();
        if (text == '') {
            return;
        }

        navigate(`/results?search_query=${text}`);
    }

    return (
        <header className='flex items-center justify-between py-3 px-7'>
            <Link className='flex items-center gap-[10px]' to={'/'}>
                <img className="min-w-[50px] max-w-[50px]" src={logo} alt="logo" />
                <h2 className='text-lg max-md:hidden'>YouTube</h2>
            </Link>

            <div className='w-full flex justify-center'>
                <form onSubmit={handleSubmit} className='xl:w-2/5 lg:w-3/5 md:w-4/6 flex gap-3 bg-black rounded-3xl overflow-hidden border-gray-600 border-[1px]'>
                    <input className='w-full p-[8px] px-4 bg-black text-white outline-none' type="text" placeholder='Ara' />
                    <button className='px-5 bg-gray-800 hover:brightness-75 transition duration-300 border-l-[1px] border-gray-600' type='submit'><IoSearchOutline className='size-5'/></button>
                </form>
            </div>

            <div className='flex gap-7'>
                <FaVideo className='size-6 cursor-pointer hover:text-slate-300 transition duration-300' />
                <FaBell className='size-6 cursor-pointer hover:text-slate-300 transition duration-300' />
                <MdVideoLibrary className='size-6 cursor-pointer hover:text-slate-300 transition duration-300' />
            </div>
        </header>
    )
}

export default Header